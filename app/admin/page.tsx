"use client";

import { useState, useCallback, useEffect } from "react";
import {
  homeContent,
  aboutContent,
  servicesContent,
  contactContent,
  donateContent,
  forReferrersContent,
  forGrantWritersContent,
  getSupportContent,
  testimonialsContent,
  formsContent,
  privacyContent,
  disclaimerContent,
} from "../content";
import { PageSelector } from "./components/PageSelector";
import { FieldEditor } from "./components/FieldEditor";
import { PreviewPanel } from "./components/PreviewPanel";

type PageKey =
  | "home"
  | "about"
  | "services"
  | "contact"
  | "donate"
  | "forReferrers"
  | "forGrantWriters"
  | "getSupport"
  | "testimonials"
  | "forms"
  | "privacy"
  | "disclaimer";

const PAGE_LABELS: Record<PageKey, string> = {
  home: "Home",
  about: "About",
  services: "Services",
  contact: "Contact",
  donate: "Donate",
  forReferrers: "For Referrers",
  forGrantWriters: "Grant Writers",
  getSupport: "Get Support",
  testimonials: "Testimonials",
  forms: "Forms",
  privacy: "Privacy",
  disclaimer: "Disclaimer",
};

const originalContent: Record<string, unknown> = {
  home: homeContent,
  about: aboutContent,
  services: servicesContent,
  contact: contactContent,
  donate: donateContent,
  forReferrers: forReferrersContent,
  forGrantWriters: forGrantWritersContent,
  getSupport: getSupportContent,
  testimonials: testimonialsContent,
  forms: formsContent,
  privacy: privacyContent,
  disclaimer: disclaimerContent,
};

function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

function deepSet(obj: unknown, path: string[], value: string): unknown {
  if (path.length === 0) return value;
  const [head, ...rest] = path;
  const current = obj as Record<string, unknown>;
  return {
    ...current,
    [head]: Array.isArray(current[head]) && rest.length > 0 && !isNaN(Number(rest[0]))
      ? (current[head] as unknown[]).map((item, idx) =>
          idx === Number(rest[0]) ? deepSet(item, rest.slice(1), value) : item
        )
      : deepSet(current[head], rest, value),
  };
}

/** Walk two objects and collect string fields that differ. */
function collectChanges(
  current: unknown,
  original: unknown,
  path: string[],
  pageName: string,
  out: { page: string; field: string; oldValue: string; newValue: string }[]
): void {
  if (current == null || typeof current !== "object") return;

  if (Array.isArray(current)) {
    const origArr = Array.isArray(original) ? original : [];
    current.forEach((item, i) => {
      collectChanges(item, origArr[i], [...path, `[${i}]`], pageName, out);
    });
    return;
  }

  const orig = (original != null && typeof original === "object") ? original as Record<string, unknown> : {} as Record<string, unknown>;
  for (const [key, value] of Object.entries(current as Record<string, unknown>)) {
    const fieldPath = [...path, key];
    if (typeof value === "string") {
      const origValue = typeof orig[key] === "string" ? (orig[key] as string) : "";
      if (value !== origValue) {
        out.push({
          page: pageName,
          field: fieldPath.join(" > "),
          oldValue: origValue,
          newValue: value,
        });
      }
    } else if (typeof value === "object" && value !== null) {
      collectChanges(value, orig[key], fieldPath, pageName, out);
    }
  }
}

const STORAGE_KEY = "kinggen-editor-draft";

export default function AdminEditorPage() {
  const [activePage, setActivePage] = useState<PageKey>("home");
  const [content, setContent] = useState<Record<string, unknown>>(() => deepClone(originalContent));
  const [hasChanges, setHasChanges] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Load draft from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          setContent(parsed);
          setHasChanges(true);
        }
      }
    } catch {
      // ignore corrupt data
    }
  }, []);

  // Auto-save to localStorage on changes
  useEffect(() => {
    if (hasChanges) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
      setSavedAt(new Date().toLocaleTimeString());
    }
  }, [content, hasChanges]);

  const handleFieldChange = useCallback(
    (path: string[], value: string) => {
      setContent((prev) => {
        const [pageKey, ...fieldPath] = path;
        const updatedPage = deepSet(prev[pageKey], fieldPath, value);
        return { ...prev, [pageKey]: updatedPage };
      });
      setHasChanges(true);
    },
    []
  );

  const handleDownload = () => {
    const json = JSON.stringify(content, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `kinggen-content-edits-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSaveDraft = async () => {
    try {
      const res = await fetch("/api/admin/drafts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (res.ok) {
        setSavedAt("Draft saved to server at " + new Date().toLocaleTimeString());
      } else {
        const data = await res.json().catch(() => null);
        setSavedAt(data?.error || "Save failed — try Submit for Review instead");
      }
    } catch {
      setSavedAt("Save failed — try Submit for Review instead");
    }
  };

  const handleSubmitForReview = async () => {
    // Collect all changes across all pages
    const changes: { page: string; field: string; oldValue: string; newValue: string }[] = [];
    for (const pageKey of Object.keys(originalContent)) {
      const label = PAGE_LABELS[pageKey as PageKey] || pageKey;
      collectChanges(content[pageKey], originalContent[pageKey], [], label, changes);
    }

    if (changes.length === 0) {
      setSavedAt("No changes to submit.");
      return;
    }

    if (!confirm(`Submit ${changes.length} change(s) for review? The developer will be able to see your edits.`)) {
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/submit-edits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ changes, fullContent: content }),
      });
      if (res.ok) {
        setSavedAt("Edits submitted for review! The developer has been notified.");
      } else {
        const data = await res.json().catch(() => null);
        setSavedAt(data?.error || "Submit failed — please try again.");
      }
    } catch {
      setSavedAt("Could not submit — please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    if (confirm("Reset all changes? This cannot be undone.")) {
      const fresh = deepClone(originalContent);
      setContent(fresh);
      setHasChanges(false);
      localStorage.removeItem(STORAGE_KEY);
      setSavedAt(null);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 shadow-sm flex-shrink-0">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold text-gray-900">KingGen Content Editor</h1>
          {hasChanges && (
            <span className="flex items-center gap-1.5 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Unsaved changes
            </span>
          )}
          {savedAt && (
            <span className="text-xs text-gray-400">{savedAt}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleSubmitForReview}
            disabled={submitting}
            className="px-3 py-1.5 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {submitting ? "Sending…" : "Submit for Review"}
          </button>
          <button
            onClick={handleSaveDraft}
            className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Save Draft
          </button>
          <button
            onClick={handleDownload}
            className="px-3 py-1.5 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            title="Download changes as JSON file"
          >
            Export
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 text-sm font-medium text-red-600 bg-white border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Main Editor */}
      <div className="flex flex-1 overflow-hidden">
        <PageSelector activePage={activePage} onSelect={(key) => setActivePage(key as PageKey)} />
        <FieldEditor
          pageKey={activePage}
          content={content[activePage]}
          originalContent={originalContent[activePage]}
          onChange={handleFieldChange}
        />
        <PreviewPanel pageKey={activePage} content={content[activePage]} />
      </div>
    </div>
  );
}
