import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

// Mock the content module
vi.mock("@/app/lib/content", () => ({
  getPageContent: vi.fn(),
  savePageContent: vi.fn(),
  CONTENT_PAGES: [
    "home",
    "about",
    "services",
    "contact",
    "donate",
    "for-referrers",
    "for-grant-writers",
    "get-support",
    "testimonials",
    "forms",
    "privacy",
    "disclaimer",
    "site-config",
  ],
}));

// Mock the admin-auth module
vi.mock("@/app/lib/admin-auth", () => ({
  validateAdminAuthorizationHeader: vi.fn(),
}));

import { GET, POST } from "./route";
import { getPageContent, savePageContent } from "@/app/lib/content";
import { validateAdminAuthorizationHeader } from "@/app/lib/admin-auth";

const mockedGetPageContent = vi.mocked(getPageContent);
const mockedSavePageContent = vi.mocked(savePageContent);
const mockedValidateAuth = vi.mocked(validateAdminAuthorizationHeader);

afterEach(() => {
  vi.resetAllMocks();
});

describe("GET /api/content", () => {
  it("returns 400 when page param is missing", async () => {
    const request = new NextRequest("http://localhost/api/content");
    const response = await GET(request);

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Invalid page" });
  });

  it("returns 400 when page param is not in CONTENT_PAGES", async () => {
    const request = new NextRequest("http://localhost/api/content?page=bogus");
    const response = await GET(request);

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Invalid page" });
  });

  it("returns 404 when content is not found", async () => {
    mockedGetPageContent.mockResolvedValue(null);

    const request = new NextRequest("http://localhost/api/content?page=home");
    const response = await GET(request);

    expect(response.status).toBe(404);
    expect(await response.json()).toEqual({ error: "No content found" });
    expect(mockedGetPageContent).toHaveBeenCalledWith("home");
  });

  it("returns content with cache headers on success", async () => {
    const content = { title: "Welcome", body: "Hello world" };
    mockedGetPageContent.mockResolvedValue(content);

    const request = new NextRequest("http://localhost/api/content?page=about");
    const response = await GET(request);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual(content);
    expect(response.headers.get("Cache-Control")).toBe("public, s-maxage=60, stale-while-revalidate=300");
  });

  it("accepts all valid CONTENT_PAGES values", async () => {
    mockedGetPageContent.mockResolvedValue({ ok: true });

    for (const page of ["home", "services", "for-grant-writers", "site-config"]) {
      const request = new NextRequest(`http://localhost/api/content?page=${page}`);
      const response = await GET(request);
      expect(response.status).toBe(200);
    }
  });
});

describe("POST /api/content", () => {
  it("returns 503 when admin password is not configured", async () => {
    mockedValidateAuth.mockReturnValue({ ok: false, status: 503, error: "unconfigured" });

    const request = new NextRequest("http://localhost/api/content", {
      method: "POST",
      body: JSON.stringify({ page: "home", content: {} }),
      headers: { "Content-Type": "application/json" },
    });
    const response = await POST(request);

    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({ error: "Authentication unavailable" });
  });

  it("returns 401 when auth fails", async () => {
    mockedValidateAuth.mockReturnValue({ ok: false, status: 401, error: "bad password" });

    const request = new NextRequest("http://localhost/api/content", {
      method: "POST",
      body: JSON.stringify({ page: "home", content: {} }),
      headers: { "Content-Type": "application/json" },
    });
    const response = await POST(request);

    expect(response.status).toBe(401);
    expect(await response.json()).toEqual({ error: "Authentication failed" });
  });

  it("returns 400 for invalid JSON body", async () => {
    mockedValidateAuth.mockReturnValue({ ok: true });

    const request = new NextRequest("http://localhost/api/content", {
      method: "POST",
      body: "not json",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer secret",
      },
    });
    const response = await POST(request);

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Invalid JSON" });
  });

  it("returns 400 when page is missing", async () => {
    mockedValidateAuth.mockReturnValue({ ok: true });

    const request = new NextRequest("http://localhost/api/content", {
      method: "POST",
      body: JSON.stringify({ content: { title: "hi" } }),
      headers: { "Content-Type": "application/json", Authorization: "Bearer secret" },
    });
    const response = await POST(request);

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Invalid request" });
  });

  it("returns 400 when page is not a valid CONTENT_PAGE", async () => {
    mockedValidateAuth.mockReturnValue({ ok: true });

    const request = new NextRequest("http://localhost/api/content", {
      method: "POST",
      body: JSON.stringify({ page: "nonexistent", content: { title: "hi" } }),
      headers: { "Content-Type": "application/json", Authorization: "Bearer secret" },
    });
    const response = await POST(request);

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Invalid request" });
  });

  it("returns 400 when content is missing", async () => {
    mockedValidateAuth.mockReturnValue({ ok: true });

    const request = new NextRequest("http://localhost/api/content", {
      method: "POST",
      body: JSON.stringify({ page: "home" }),
      headers: { "Content-Type": "application/json", Authorization: "Bearer secret" },
    });
    const response = await POST(request);

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Invalid request" });
  });

  it("saves content and returns success with blob url", async () => {
    mockedValidateAuth.mockReturnValue({ ok: true });
    mockedSavePageContent.mockResolvedValue({
      url: "https://blob.vercel-storage.com/content/home.json",
      pathname: "content/home.json",
      contentType: "application/json",
      contentDisposition: "inline",
      downloadUrl: "https://blob.vercel-storage.com/content/home.json",
    } as never);

    const content = { title: "Updated Home" };
    const request = new NextRequest("http://localhost/api/content", {
      method: "POST",
      body: JSON.stringify({ page: "home", content }),
      headers: { "Content-Type": "application/json", Authorization: "Bearer secret" },
    });
    const response = await POST(request);

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.url).toBe("https://blob.vercel-storage.com/content/home.json");
    expect(mockedSavePageContent).toHaveBeenCalledWith("home", content);
  });

  it("returns 500 when savePageContent throws", async () => {
    mockedValidateAuth.mockReturnValue({ ok: true });
    mockedSavePageContent.mockRejectedValue(new Error("Blob storage error"));

    const request = new NextRequest("http://localhost/api/content", {
      method: "POST",
      body: JSON.stringify({ page: "home", content: { title: "test" } }),
      headers: { "Content-Type": "application/json", Authorization: "Bearer secret" },
    });
    const response = await POST(request);

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Failed to save content" });
  });

  it("passes the authorization header to validateAdminAuthorizationHeader", async () => {
    mockedValidateAuth.mockReturnValue({ ok: false, status: 401, error: "bad" });

    const request = new NextRequest("http://localhost/api/content", {
      method: "POST",
      body: JSON.stringify({ page: "home", content: {} }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
      },
    });
    await POST(request);

    expect(mockedValidateAuth).toHaveBeenCalledWith("Bearer my-token");
  });
});
