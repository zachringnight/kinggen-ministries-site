export const ADMIN_PASSWORD_UNCONFIGURED_MESSAGE =
  "Admin password is not configured for this environment. Set ADMIN_PASSWORD before using the admin editor.";

export const ADMIN_PASSWORD_INVALID_MESSAGE =
  "Unauthorized. Check your admin password.";

export type AdminAuthResult =
  | { ok: true }
  | { ok: false; status: 401 | 503; error: string };

export function isAdminPasswordConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD?.trim());
}

export function getBearerTokenFromHeader(authHeader: string | null): string {
  if (!authHeader) return "";

  const [scheme, ...rest] = authHeader.trim().split(/\s+/);
  if (scheme?.toLowerCase() !== "bearer" || rest.length === 0) {
    return "";
  }

  return rest.join(" ").trim();
}

export function validateAdminPassword(
  candidatePassword: string | null | undefined
): AdminAuthResult {
  const expectedPassword = process.env.ADMIN_PASSWORD?.trim();

  if (!expectedPassword) {
    return {
      ok: false,
      status: 503,
      error: ADMIN_PASSWORD_UNCONFIGURED_MESSAGE,
    };
  }

  if (!candidatePassword?.trim() || candidatePassword.trim() !== expectedPassword) {
    return {
      ok: false,
      status: 401,
      error: ADMIN_PASSWORD_INVALID_MESSAGE,
    };
  }

  return { ok: true };
}

export function validateAdminAuthorizationHeader(
  authHeader: string | null
): AdminAuthResult {
  return validateAdminPassword(getBearerTokenFromHeader(authHeader));
}
