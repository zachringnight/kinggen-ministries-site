"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Draft {
  url: string;
  uploadedAt: string;
  size: number;
  pathname: string;
}

interface DraftDetail {
  changes: { page: string; field: string; oldValue: string; newValue: string }[];
  fullContent: Record<string, unknown>;
}

export default function ReviewsPage() {
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDraft, setSelectedDraft] = useState<DraftDetail | null>(null);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const [loadingDraft, setLoadingDraft] = useState(false);

  useEffect(() => {
    async function fetchDrafts() {
      try {
        const res = await fetch("/api/admin/submit-edits");
        if (!res.ok) {
          const data = await res.json().catch(() => null);
          setError(data?.error || "Failed to load drafts.");
          return;
        }
        const data = await res.json();
        setDrafts(data.drafts || []);
      } catch {
        setError("Could not connect to server.");
      } finally {
        setLoading(false);
      }
    }
    fetchDrafts();
  }, []);

  const viewDraft = async (draft: Draft) => {
    setLoadingDraft(true);
    setSelectedUrl(draft.url);
    try {
      const res = await fetch(draft.url);
      const data: DraftDetail = await res.json();
      setSelectedDraft(data);
    } catch {
      setSelectedDraft(null);
      setError("Could not load draft details.");
    } finally {
      setLoadingDraft(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Submitted Content Edits</h1>
        <Link
          href="/admin"
          className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back to Editor
        </Link>
      </div>

      {loading && <p className="text-gray-500">Loading submissions…</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && drafts.length === 0 && !error && (
        <p className="text-gray-500">No submissions yet. The ministry team hasn&apos;t submitted any edits.</p>
      )}

      {drafts.length > 0 && (
        <div className="space-y-3">
          {drafts.map((draft) => (
            <div
              key={draft.url}
              className={`flex items-center justify-between p-4 bg-white border rounded-lg ${
                selectedUrl === draft.url ? "border-green-500 ring-2 ring-green-100" : "border-gray-200"
              }`}
            >
              <div>
                <p className="font-medium text-gray-900">
                  {new Date(draft.uploadedAt).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  {(draft.size / 1024).toFixed(1)} KB
                </p>
              </div>
              <button
                onClick={() => viewDraft(draft)}
                className="px-3 py-1.5 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
              >
                View Changes
              </button>
            </div>
          ))}
        </div>
      )}

      {loadingDraft && (
        <p className="mt-6 text-gray-500">Loading draft details…</p>
      )}

      {selectedDraft && !loadingDraft && (
        <div className="mt-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Changes ({selectedDraft.changes.length} field{selectedDraft.changes.length !== 1 ? "s" : ""})
          </h2>
          <div className="space-y-4">
            {selectedDraft.changes.map((change, i) => (
              <div key={i} className="p-4 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-2 py-0.5 bg-blue-100 text-blue-700 rounded">
                    {change.page}
                  </span>
                  <span className="text-sm text-gray-600">{change.field}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-medium text-red-600 mb-1">Before:</p>
                    <p className="text-sm text-gray-700 bg-red-50 p-2 rounded whitespace-pre-wrap">
                      {change.oldValue || "(empty)"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-green-600 mb-1">After:</p>
                    <p className="text-sm text-gray-700 bg-green-50 p-2 rounded whitespace-pre-wrap">
                      {change.newValue || "(empty)"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
