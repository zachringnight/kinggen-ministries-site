import { afterEach, describe, expect, it, vi } from "vitest";
import {
  ADMIN_PASSWORD_INVALID_MESSAGE,
  ADMIN_PASSWORD_UNCONFIGURED_MESSAGE,
  getBearerTokenFromHeader,
  validateAdminAuthorizationHeader,
  validateAdminPassword,
} from "./admin-auth";
import {
  CONTENT_STORAGE_UNAVAILABLE_MESSAGE,
  getContentStorageConfigError,
  isContentStorageConfigured,
} from "./content";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("validateAdminPassword", () => {
  it("returns a setup error when ADMIN_PASSWORD is missing", () => {
    const result = validateAdminPassword("anything");

    expect(result).toEqual({
      ok: false,
      status: 503,
      error: ADMIN_PASSWORD_UNCONFIGURED_MESSAGE,
    });
  });

  it("accepts the configured password", () => {
    vi.stubEnv("ADMIN_PASSWORD", "secret");

    expect(validateAdminPassword("secret")).toEqual({ ok: true });
  });

  it("rejects an incorrect password", () => {
    vi.stubEnv("ADMIN_PASSWORD", "secret");

    expect(validateAdminPassword("wrong")).toEqual({
      ok: false,
      status: 401,
      error: ADMIN_PASSWORD_INVALID_MESSAGE,
    });
  });
});

describe("getBearerTokenFromHeader", () => {
  it("extracts bearer tokens from authorization headers", () => {
    expect(getBearerTokenFromHeader("Bearer secret-token")).toBe("secret-token");
  });

  it("returns an empty string for non-bearer headers", () => {
    expect(getBearerTokenFromHeader("Basic abc123")).toBe("");
  });
});

describe("validateAdminAuthorizationHeader", () => {
  it("validates bearer tokens against ADMIN_PASSWORD", () => {
    vi.stubEnv("ADMIN_PASSWORD", "secret");

    expect(validateAdminAuthorizationHeader("Bearer secret")).toEqual({ ok: true });
  });
});

describe("content storage configuration", () => {
  it("reports missing Blob configuration", () => {
    expect(isContentStorageConfigured()).toBe(false);
    expect(getContentStorageConfigError()).toBe(
      CONTENT_STORAGE_UNAVAILABLE_MESSAGE
    );
  });

  it("reports configured Blob storage", () => {
    vi.stubEnv("BLOB_READ_WRITE_TOKEN", "token");

    expect(isContentStorageConfigured()).toBe(true);
    expect(getContentStorageConfigError()).toBeNull();
  });
});
