import { list, put } from '@vercel/blob';

const CONTENT_PREFIX = 'content/';
export const CONTENT_STORAGE_UNAVAILABLE_MESSAGE =
  'Content storage is not configured for this environment. Set BLOB_READ_WRITE_TOKEN before using the admin editor.';

export const CONTENT_PAGES = [
  'home', 'about', 'services', 'contact', 'donate',
  'for-referrers', 'for-grant-writers', 'get-support',
  'testimonials', 'forms', 'privacy', 'disclaimer', 'site-config'
] as const;

export type ContentPage = (typeof CONTENT_PAGES)[number];

export type PageContentReadResult =
  | { status: 'ok'; content: Record<string, unknown> }
  | { status: 'missing' }
  | { status: 'unavailable'; error: string };

export class ContentStorageUnavailableError extends Error {
  constructor(message = CONTENT_STORAGE_UNAVAILABLE_MESSAGE) {
    super(message);
    this.name = 'ContentStorageUnavailableError';
  }
}

export function isContentStorageConfigured(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN?.trim());
}

export function getContentStorageConfigError(): string | null {
  return isContentStorageConfigured()
    ? null
    : CONTENT_STORAGE_UNAVAILABLE_MESSAGE;
}

/**
 * Fetch content for a page from Vercel Blob.
 * Returns parsed JSON or null if not found.
 */
export async function readPageContent(
  page: ContentPage
): Promise<PageContentReadResult> {
  const configError = getContentStorageConfigError();
  if (configError) {
    return {
      status: 'unavailable',
      error: configError,
    };
  }

  try {
    const { blobs } = await list({
      prefix: `${CONTENT_PREFIX}${page}.json`,
    });

    if (blobs.length === 0) {
      return { status: 'missing' };
    }

    const response = await fetch(blobs[0].url, {
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      return {
        status: 'unavailable',
        error: 'Content storage is unavailable right now. Please try again.',
      };
    }

    return {
      status: 'ok',
      content: (await response.json()) as Record<string, unknown>,
    };
  } catch {
    return {
      status: 'unavailable',
      error: 'Content storage is unavailable right now. Please try again.',
    };
  }
}

export async function getPageContent(
  page: ContentPage
): Promise<Record<string, unknown> | null> {
  const result = await readPageContent(page);
  return result.status === 'ok' ? result.content : null;
}

/**
 * Save content for a page to Vercel Blob.
 * Uses addRandomSuffix: false so each page overwrites cleanly.
 */
export async function savePageContent(
  page: ContentPage,
  content: Record<string, unknown>
) {
  const configError = getContentStorageConfigError();
  if (configError) {
    throw new ContentStorageUnavailableError(configError);
  }

  try {
    const blob = await put(
      `${CONTENT_PREFIX}${page}.json`,
      JSON.stringify(
        {
          ...content,
          _meta: {
            updatedAt: new Date().toISOString(),
            updatedBy: 'admin',
          },
        },
        null,
        2
      ),
      {
        access: 'public',
        addRandomSuffix: false,
        allowOverwrite: true,
        cacheControlMaxAge: 60,
        contentType: 'application/json',
      }
    );
    return blob;
  } catch {
    throw new ContentStorageUnavailableError(
      'Unable to save to content storage right now. Please try again.'
    );
  }
}
