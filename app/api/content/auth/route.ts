import { NextResponse } from 'next/server';
import { validateAdminPassword } from '@/app/lib/admin-auth';

export async function POST(request: Request) {
  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }

  if (!body.password || typeof body.password !== 'string') {
    return NextResponse.json(
      { error: 'Password is required' },
      { status: 400 }
    );
  }

  const authResult = validateAdminPassword(body.password);
  if (!authResult.ok) {
    const message =
      authResult.status === 503
        ? 'Authentication unavailable'
        : 'Authentication failed';
    return NextResponse.json(
      { error: message },
      { status: authResult.status }
    );
  }

  return NextResponse.json({ success: true });
}
