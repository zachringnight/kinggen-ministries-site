import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "./route";

const originalFetch = globalThis.fetch;

afterEach(() => {
  vi.unstubAllEnvs();
  globalThis.fetch = originalFetch;
});

function makeRequest(body: unknown): Request {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

function mockFetchOk() {
  globalThis.fetch = vi.fn().mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
}

function mockFetchError(status: number, body?: unknown) {
  globalThis.fetch = vi.fn().mockResolvedValue(new Response(JSON.stringify(body ?? {}), { status }));
}

const validPayload = {
  name: "Jane Doe",
  email: "jane@example.com",
  message: "I need help",
};

describe("POST /api/contact", () => {
  beforeEach(() => {
    vi.stubEnv("FORMSPREE_ENDPOINT", "https://formspree.io/f/test123");
  });

  // --- Validation ---

  it("returns 400 for invalid JSON body", async () => {
    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      body: "not json",
      headers: { "Content-Type": "application/json" },
    });
    const response = await POST(request);

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Invalid request body." });
  });

  it("returns 400 when name is missing", async () => {
    const response = await POST(makeRequest({ email: "a@b.com", message: "hi" }));

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Please complete all required fields." });
  });

  it("returns 400 when email is missing", async () => {
    const response = await POST(makeRequest({ name: "Jane", message: "hi" }));

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Please complete all required fields." });
  });

  it("returns 400 when message is missing", async () => {
    const response = await POST(makeRequest({ name: "Jane", email: "a@b.com" }));

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Please complete all required fields." });
  });

  it("returns 400 when fields are blank strings", async () => {
    const response = await POST(makeRequest({ name: "  ", email: "a@b.com", message: "hi" }));

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Please complete all required fields." });
  });

  it("returns 400 for invalid email format", async () => {
    const response = await POST(makeRequest({ ...validPayload, email: "not-an-email" }));

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Please enter a valid email address." });
  });

  it("returns 400 for email without domain", async () => {
    const response = await POST(makeRequest({ ...validPayload, email: "user@" }));

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Please enter a valid email address." });
  });

  // --- Endpoint configuration ---

  it("returns 500 when no Formspree endpoint is configured", async () => {
    vi.unstubAllEnvs();

    const response = await POST(makeRequest(validPayload));

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Contact form is not configured yet." });
  });

  it("returns 500 when endpoint contains placeholder text", async () => {
    vi.stubEnv("FORMSPREE_ENDPOINT", "https://formspree.io/f/your-form-id");

    const response = await POST(makeRequest(validPayload));

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Contact form is not configured yet." });
  });

  it("uses NEXT_PUBLIC_FORMSPREE_ENDPOINT as fallback", async () => {
    vi.unstubAllEnvs();
    vi.stubEnv("NEXT_PUBLIC_FORMSPREE_ENDPOINT", "https://formspree.io/f/public123");
    mockFetchOk();

    const response = await POST(makeRequest(validPayload));

    expect(response.status).toBe(200);
    expect(globalThis.fetch).toHaveBeenCalledWith("https://formspree.io/f/public123", expect.anything());
  });

  // --- Successful submission ---

  it("returns 200 on successful form submission", async () => {
    mockFetchOk();

    const response = await POST(makeRequest(validPayload));

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ success: true });
  });

  it("forwards correct payload to Formspree", async () => {
    mockFetchOk();

    const payload = {
      ...validPayload,
      phone: "555-1234",
      reason: "counseling",
    };
    await POST(makeRequest(payload));

    expect(globalThis.fetch).toHaveBeenCalledWith(
      "https://formspree.io/f/test123",
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          reason: "counseling",
          name: "Jane Doe",
          email: "jane@example.com",
          phone: "555-1234",
          message: "I need help",
          _subject: "New inquiry from KingGen website",
        }),
      }),
    );
  });

  it("defaults reason to general-inquiry when not provided", async () => {
    mockFetchOk();

    await POST(makeRequest(validPayload));

    const fetchCall = vi.mocked(globalThis.fetch).mock.calls[0];
    const sentBody = JSON.parse(fetchCall[1]!.body as string);
    expect(sentBody.reason).toBe("general-inquiry");
  });

  it("sends empty string for phone when not provided", async () => {
    mockFetchOk();

    await POST(makeRequest(validPayload));

    const fetchCall = vi.mocked(globalThis.fetch).mock.calls[0];
    const sentBody = JSON.parse(fetchCall[1]!.body as string);
    expect(sentBody.phone).toBe("");
  });

  // --- Formspree errors ---

  it("returns 502 when Formspree returns an error", async () => {
    mockFetchError(422, { errors: [{ message: "Invalid email address" }] });

    const response = await POST(makeRequest(validPayload));

    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({ error: "Invalid email address" });
  });

  it("returns 502 with default message when Formspree error has no message", async () => {
    mockFetchError(500, {});

    const response = await POST(makeRequest(validPayload));

    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({ error: "We could not submit your message." });
  });

  it("returns 502 with default message when Formspree error body is not JSON", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      json: () => Promise.reject(new Error("not json")),
    });

    const response = await POST(makeRequest(validPayload));

    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({ error: "We could not submit your message." });
  });

  // --- Network failure ---

  it("returns 503 when fetch throws (network failure)", async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    const response = await POST(makeRequest(validPayload));

    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({
      error: "We could not send your message right now. Please try again.",
    });
  });
});
