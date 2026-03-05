import { put } from "@vercel/blob";

const CONTACT_SUBMISSION_PREFIX = "contact-submissions";

export interface ContactSubmission {
  reason: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: string;
  source: string;
  metadata: {
    ipAddress: string | null;
    userAgent: string | null;
  };
}

export function isContactSubmissionStorageConfigured(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN?.trim());
}

function getDatePath(date: Date): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
}

function buildSubmissionPath(date: Date): string {
  const timestamp = date.toISOString().replace(/[:.]/g, "-");
  return `${CONTACT_SUBMISSION_PREFIX}/${getDatePath(date)}/${timestamp}-${crypto.randomUUID()}.json`;
}

export async function saveContactSubmission(submission: ContactSubmission) {
  const submittedAt = new Date(submission.submittedAt);
  const pathname = buildSubmissionPath(submittedAt);

  return put(pathname, JSON.stringify(submission, null, 2), {
    access: "private",
    addRandomSuffix: false,
    contentType: "application/json",
  });
}
