import { afterEach, describe, expect, it, vi } from 'vitest';
import { POST } from './route';

afterEach(() => {
  vi.unstubAllEnvs();
});

function makeRequest(body: unknown): Request {
  return new Request('http://localhost/api/content/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('POST /api/content/auth', () => {
  it('returns 400 for invalid JSON body', async () => {
    const request = new Request('http://localhost/api/content/auth', {
      method: 'POST',
      body: 'not-json',
      headers: { 'Content-Type': 'application/json' },
    });
    const response = await POST(request);

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: 'Invalid request' });
  });

  it('returns 400 when password is missing', async () => {
    const response = await POST(makeRequest({}));

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: 'Password is required' });
  });

  it('returns 400 when password is not a string', async () => {
    const response = await POST(makeRequest({ password: 123 }));

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: 'Password is required' });
  });

  it('returns 503 when ADMIN_PASSWORD is not configured', async () => {
    // ADMIN_PASSWORD is not set by default in tests
    const response = await POST(makeRequest({ password: 'anything' }));

    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({ error: 'Authentication unavailable' });
  });

  it('returns 401 for wrong password', async () => {
    vi.stubEnv('ADMIN_PASSWORD', 'correct-password');

    const response = await POST(makeRequest({ password: 'wrong-password' }));

    expect(response.status).toBe(401);
    expect(await response.json()).toEqual({ error: 'Authentication failed' });
  });

  it('returns 200 on successful authentication', async () => {
    vi.stubEnv('ADMIN_PASSWORD', 'my-secret');

    const response = await POST(makeRequest({ password: 'my-secret' }));

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ success: true });
  });

  it('does not leak internal error details in 503 response', async () => {
    const response = await POST(makeRequest({ password: 'test' }));

    const body = await response.json();
    expect(body.error).toBe('Authentication unavailable');
    expect(body.error).not.toContain('ADMIN_PASSWORD');
    expect(body.error).not.toContain('environment');
  });

  it('does not leak internal error details in 401 response', async () => {
    vi.stubEnv('ADMIN_PASSWORD', 'secret');

    const response = await POST(makeRequest({ password: 'wrong' }));

    const body = await response.json();
    expect(body.error).toBe('Authentication failed');
    expect(body.error).not.toContain('password');
  });
});
