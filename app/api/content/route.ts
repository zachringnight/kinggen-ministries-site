import { NextRequest, NextResponse } from 'next/server';
import {
  getPageContent,
  savePageContent,
  CONTENT_PAGES,
  type ContentPage,
} from '@/app/lib/content';

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get('page') as ContentPage;

  if (!page || !CONTENT_PAGES.includes(page)) {
    return NextResponse.json({ error: 'Invalid page' }, { status: 400 });
  }

  const content = await getPageContent(page);

  if (!content) {
    return NextResponse.json({ error: 'No content found' }, { status: 404 });
  }

  return NextResponse.json(content, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    },
  });
}

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || authHeader !== `Bearer ${adminPassword}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { page?: string; content?: Record<string, unknown> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { page, content } = body;

  if (
    !page ||
    !CONTENT_PAGES.includes(page as ContentPage) ||
    !content
  ) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  try {
    const blob = await savePageContent(page as ContentPage, content);
    return NextResponse.json({ success: true, url: blob.url });
  } catch (err) {
    console.error('Failed to save content:', err);
    return NextResponse.json(
      { error: 'Failed to save content' },
      { status: 500 }
    );
  }
}
