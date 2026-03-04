"use client";

import { useState, useCallback, useEffect } from "react";

const PAGES = [
  { slug: "home", label: "Home" },
  { slug: "about", label: "About" },
  { slug: "services", label: "Services" },
  { slug: "donate", label: "Donate" },
  { slug: "for-referrers", label: "For Referrers" },
  { slug: "for-grant-writers", label: "For Grant Writers" },
  { slug: "get-support", label: "Client Info" },
  { slug: "testimonials", label: "Testimonials" },
  { slug: "forms", label: "Forms" },
  { slug: "privacy", label: "Privacy" },
  { slug: "disclaimer", label: "Disclaimer" },
] as const;

type Status = "idle" | "loading" | "saving" | "success" | "error";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState(false);

  const [activePage, setActivePage] = useState<string>("home");
  const [json, setJson] = useState("");
  const [savedJson, setSavedJson] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  /* ---- Auth ---- */
  const handleLogin = useCallback(async () => {
    setAuthError(false);
    try {
      const res = await fetch(`/api/content?page=home`);
      if (res.ok) {
        setAuthed(true);
      } else {
        setAuthError(true);
      }
    } catch {
      // If the GET fails it might be a network issue, still allow attempt
      setAuthed(true);
    }
  }, []);

  /* ---- Load ---- */
  const loadContent = useCallback(
    async (page: string) => {
      setStatus("loading");
      setMessage("");
      try {
        const res = await fetch(`/api/content?page=${page}`);
        if (res.status === 404) {
          const empty = "{\n  \n}";
          setJson(empty);
          setSavedJson(empty);
          setStatus("idle");
          setMessage("No content stored yet. JSON will use hardcoded fallbacks.");
          return;
        }
        if (!res.ok) throw new Error(`${res.status}`);
        const data = await res.json();
        const formatted = JSON.stringify(data, null, 2);
        setJson(formatted);
        setSavedJson(formatted);
        setStatus("idle");
      } catch (err) {
        setStatus("error");
        setMessage(`Failed to load: ${err}`);
      }
    },
    []
  );

  /* ---- Save ---- */
  const handleSave = useCallback(async () => {
    setStatus("saving");
    setMessage("");

    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(json);
    } catch {
      setStatus("error");
      setMessage("Invalid JSON. Fix syntax before saving.");
      return;
    }

    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ page: activePage, content: parsed }),
      });

      if (res.status === 401) {
        setStatus("error");
        setMessage("Unauthorized. Check your password.");
        return;
      }

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error((body as Record<string, string>).error || `${res.status}`);
      }

      setStatus("success");
      setMessage("Saved. Changes go live within 60 seconds.");
      setSavedJson(json);
    } catch (err) {
      setStatus("error");
      setMessage(`Save failed: ${err}`);
    }
  }, [json, password, activePage]);

  /* ---- Reset ---- */
  const handleReset = useCallback(() => {
    setJson(savedJson);
    setStatus("idle");
    setMessage("Reverted to last saved version.");
  }, [savedJson]);

  /* ---- Page switch ---- */
  useEffect(() => {
    if (authed) {
      loadContent(activePage);
    }
  }, [authed, activePage, loadContent]);

  const hasChanges = json !== savedJson;

  /* ===================== LOGIN SCREEN ===================== */
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-2">Admin</h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            Enter the admin password to manage site content.
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 mb-4"
          />
          {authError && (
            <p className="text-red-600 text-sm mb-4 text-center">
              Could not verify. Try again.
            </p>
          )}
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  /* ===================== EDITOR ===================== */
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900">
            KingGen Admin
          </h1>
          <div className="flex items-center gap-3">
            {status === "saving" && (
              <span className="text-sm text-gray-500">Saving...</span>
            )}
            {status === "loading" && (
              <span className="text-sm text-gray-500">Loading...</span>
            )}
            <a
              href={`/${activePage === "home" ? "" : activePage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Preview Page
            </a>
            <button
              onClick={() => {
                setAuthed(false);
                setPassword("");
              }}
              className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Sidebar */}
        <nav className="w-48 flex-shrink-0">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Pages
          </p>
          <ul className="space-y-1">
            {PAGES.map((p) => (
              <li key={p.slug}>
                <button
                  onClick={() => setActivePage(p.slug)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activePage === p.slug
                      ? "bg-green-700 text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {p.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main editor area */}
        <main className="flex-1 min-w-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center gap-3">
                <h2 className="font-semibold text-gray-900 capitalize">
                  {PAGES.find((p) => p.slug === activePage)?.label ?? activePage}
                </h2>
                {hasChanges && (
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                    Unsaved changes
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  disabled={!hasChanges || status === "saving"}
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Reset
                </button>
                <button
                  onClick={handleSave}
                  disabled={status === "saving" || status === "loading"}
                  className="px-4 py-1.5 text-sm bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {status === "saving" ? "Saving..." : "Save"}
                </button>
              </div>
            </div>

            {/* JSON editor */}
            <textarea
              value={json}
              onChange={(e) => {
                setJson(e.target.value);
                if (status === "success" || status === "error") {
                  setStatus("idle");
                  setMessage("");
                }
              }}
              spellCheck={false}
              className="w-full h-[calc(100vh-280px)] min-h-[400px] p-4 font-mono text-sm leading-relaxed text-gray-800 bg-white resize-none focus:outline-none"
              placeholder="Loading content..."
            />

            {/* Status bar */}
            {message && (
              <div
                className={`px-4 py-2 text-sm border-t ${
                  status === "error"
                    ? "bg-red-50 text-red-700 border-red-100"
                    : status === "success"
                    ? "bg-green-50 text-green-700 border-green-100"
                    : "bg-blue-50 text-blue-700 border-blue-100"
                }`}
              >
                {message}
              </div>
            )}
          </div>

          {/* Help text */}
          <div className="mt-4 px-1 text-xs text-gray-400 space-y-1">
            <p>Edit the JSON above, then hit Save. Changes go live within 60 seconds via ISR.</p>
            <p>If a key is removed, the page falls back to its hardcoded default.</p>
            <p>Icons are stored as string names (e.g. &quot;HeartIcon&quot;, &quot;ShieldIcon&quot;).</p>
          </div>
        </main>
      </div>
    </div>
  );
}
