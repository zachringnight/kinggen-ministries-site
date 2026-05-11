"use client";

import { useEffect, useState } from "react";
import { BrandLockup } from "../components";

const PAGES = [
  { slug: "home", label: "Home" },
  { slug: "about", label: "About" },
  { slug: "services", label: "Services" },
  { slug: "contact", label: "Contact" },
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
type EditorMode = "guided" | "json";
type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonObject | JsonArray;
interface JsonObject {
  [key: string]: JsonValue;
}
interface JsonArray extends Array<JsonValue> {}
type EditorPath = Array<string | number>;

const LONG_TEXT_FIELD_PATTERN =
  /(description|subtitle|message|quote|text|content|body|mission|heart|privacy|disclaimer|statement|details|summary|intro)/i;

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function humanizeKey(value: string) {
  return value.replace(/[_-]+/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatJson(value: JsonObject) {
  return JSON.stringify(value, null, 2);
}

function parseJsonObject(raw: string): JsonObject {
  const parsed = JSON.parse(raw) as unknown;
  if (!isJsonObject(parsed)) {
    throw new Error("Top-level content must be an object.");
  }
  return parsed;
}

function pathToId(path: EditorPath) {
  return `field-${path.join("-").replace(/[^a-zA-Z0-9-_]/g, "-")}`;
}

function getJsonValue(value: JsonValue, path: EditorPath): JsonValue | undefined {
  let current: JsonValue | undefined = value;

  for (const part of path) {
    if (Array.isArray(current) && typeof part === "number") {
      current = current[part];
      continue;
    }

    if (isJsonObject(current) && typeof part === "string") {
      current = current[part];
      continue;
    }

    return undefined;
  }

  return current;
}

function updateJsonValue(value: JsonValue, path: EditorPath, nextValue: JsonValue): JsonValue {
  if (path.length === 0) {
    return nextValue;
  }

  const [head, ...rest] = path;

  if (Array.isArray(value) && typeof head === "number") {
    return value.map((item, index) => (index === head ? updateJsonValue(item, rest, nextValue) : item));
  }

  if (isJsonObject(value) && typeof head === "string") {
    if (rest.length === 0) {
      return { ...value, [head]: nextValue };
    }

    return {
      ...value,
      [head]: updateJsonValue(value[head], rest, nextValue),
    };
  }

  return value;
}

function createEmptyValueFromSample(value: JsonValue | undefined): JsonValue {
  if (Array.isArray(value)) {
    return value.length > 0 ? [createEmptyValueFromSample(value[0])] : [""];
  }

  if (isJsonObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, createEmptyValueFromSample(nestedValue)]),
    );
  }

  if (typeof value === "number") return 0;
  if (typeof value === "boolean") return false;
  return "";
}

function getArrayItemLabel(item: JsonValue, index: number) {
  if (typeof item === "string" && item.trim()) {
    return item.length > 28 ? `${item.slice(0, 28)}...` : item;
  }

  if (isJsonObject(item)) {
    for (const key of ["title", "headline", "label", "name", "author", "area", "value", "text"]) {
      const candidate = item[key];
      if (typeof candidate === "string" && candidate.trim()) {
        return candidate;
      }
    }
  }

  return `Item ${index + 1}`;
}

function getSectionSummary(value: JsonValue): string | null {
  if (typeof value === "string" && value.trim()) {
    return value;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) return "No items yet";
    if (typeof value[0] === "string") {
      return `${value.length} text item${value.length === 1 ? "" : "s"}`;
    }
    return `${value.length} item${value.length === 1 ? "" : "s"}`;
  }

  if (isJsonObject(value)) {
    for (const key of ["headline", "title", "subtitle", "description", "text", "label", "quote", "mission", "heart"]) {
      const candidate = value[key];
      if (typeof candidate === "string" && candidate.trim()) {
        return candidate;
      }
    }
  }

  return null;
}

function shouldUseTextarea(fieldKey: string, value: JsonPrimitive) {
  return typeof value === "string" && (value.length > 90 || LONG_TEXT_FIELD_PATTERN.test(fieldKey));
}

interface GuidedFieldProps {
  fieldKey: string;
  value: JsonValue;
  path: EditorPath;
  depth?: number;
  compact?: boolean;
  onValueChange: (path: EditorPath, value: JsonValue) => void;
  onAddArrayItem: (path: EditorPath) => void;
  onRemoveArrayItem: (path: EditorPath, index: number) => void;
}

function GuidedField({
  fieldKey,
  value,
  path,
  depth = 0,
  compact = false,
  onValueChange,
  onAddArrayItem,
  onRemoveArrayItem,
}: GuidedFieldProps) {
  const label = humanizeKey(fieldKey);

  if (Array.isArray(value)) {
    return (
      <section
        className={`rounded-[1.6rem] border border-brand-light/90 bg-brand-soft/70 p-4 md:p-5 ${
          compact ? "" : "shadow-[0_18px_40px_-28px_rgba(38,61,39,0.22)]"
        }`}
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-text-primary">{label}</h3>
            <p className="text-sm text-text-muted">Repeatable content block. Add or remove items as needed.</p>
          </div>
          <button
            type="button"
            onClick={() => onAddArrayItem(path)}
            className="rounded-full border border-brand-primary/20 bg-white px-4 py-2 text-sm font-semibold text-brand-primary transition-colors hover:border-brand-primary/40 hover:bg-brand-primary hover:text-white"
          >
            Add Item
          </button>
        </div>

        <div className="space-y-4">
          {value.map((item, index) => (
            <div
              key={`${path.join(".")}-${index}`}
              className="rounded-[1.35rem] border border-white/85 bg-white/90 p-4 shadow-[0_12px_30px_-24px_rgba(38,61,39,0.24)]"
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-text-primary">{getArrayItemLabel(item, index)}</p>
                <button
                  type="button"
                  onClick={() => onRemoveArrayItem(path, index)}
                  className="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted transition-colors hover:text-brand-primary"
                >
                  Remove
                </button>
              </div>

              {isJsonObject(item) ? (
                <div className="space-y-4">
                  {Object.entries(item).map(([childKey, childValue]) => (
                    <GuidedField
                      key={childKey}
                      fieldKey={childKey}
                      value={childValue}
                      path={[...path, index, childKey]}
                      depth={depth + 1}
                      compact
                      onValueChange={onValueChange}
                      onAddArrayItem={onAddArrayItem}
                      onRemoveArrayItem={onRemoveArrayItem}
                    />
                  ))}
                </div>
              ) : (
                <GuidedField
                  fieldKey={`${fieldKey}-${index}`}
                  value={item}
                  path={[...path, index]}
                  depth={depth + 1}
                  compact
                  onValueChange={onValueChange}
                  onAddArrayItem={onAddArrayItem}
                  onRemoveArrayItem={onRemoveArrayItem}
                />
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (isJsonObject(value)) {
    return (
      <section
        className={`rounded-[1.8rem] border border-brand-light/85 bg-white/88 p-5 md:p-6 ${
          compact ? "" : "shadow-[0_22px_50px_-30px_rgba(38,61,39,0.26)]"
        }`}
      >
        {!compact && (
          <div className="mb-5">
            <div className="mb-3 h-[2px] w-12 rounded-full bg-gradient-to-r from-brand-accent to-brand-primary/80" />
            <h2 className="text-2xl font-bold font-heading text-text-primary">{label}</h2>
            <p className="mt-1 text-sm text-text-muted">Friendly fields on the front, JSON behind the scenes.</p>
          </div>
        )}

        <div className="space-y-4">
          {Object.entries(value)
            .filter(([childKey]) => childKey !== "_meta")
            .map(([childKey, childValue]) => (
              <GuidedField
                key={childKey}
                fieldKey={childKey}
                value={childValue}
                path={[...path, childKey]}
                depth={depth + 1}
                onValueChange={onValueChange}
                onAddArrayItem={onAddArrayItem}
                onRemoveArrayItem={onRemoveArrayItem}
              />
            ))}
        </div>
      </section>
    );
  }

  if (typeof value === "boolean") {
    return (
      <label
        htmlFor={pathToId(path)}
        className="flex items-center justify-between gap-4 rounded-2xl border border-brand-light/85 bg-brand-soft/45 px-4 py-3"
      >
        <div>
          <span className="block text-sm font-semibold text-text-primary">{label}</span>
          <span className="block text-xs text-text-muted">On or off</span>
        </div>
        <input
          id={pathToId(path)}
          type="checkbox"
          checked={value}
          onChange={(event) => onValueChange(path, event.target.checked)}
          className="h-5 w-5 rounded border-brand-light text-brand-primary focus:ring-brand-accent"
        />
      </label>
    );
  }

  if (typeof value === "number") {
    return (
      <div className="space-y-2">
        <label htmlFor={pathToId(path)} className="block text-sm font-semibold text-text-primary">
          {label}
        </label>
        <input
          id={pathToId(path)}
          type="number"
          value={value}
          onChange={(event) => onValueChange(path, Number(event.target.value))}
          className="w-full rounded-2xl border border-brand-light bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-brand-accent"
        />
      </div>
    );
  }

  const normalizedValue = typeof value === "string" ? value : value === null ? "" : String(value);

  if (shouldUseTextarea(fieldKey, normalizedValue)) {
    return (
      <div className="space-y-2">
        <label htmlFor={pathToId(path)} className="block text-sm font-semibold text-text-primary">
          {label}
        </label>
        <textarea
          id={pathToId(path)}
          rows={compact ? 4 : 5}
          value={normalizedValue}
          onChange={(event) => onValueChange(path, event.target.value)}
          className="w-full resize-y rounded-2xl border border-brand-light bg-white px-4 py-3 text-sm leading-relaxed text-text-primary outline-none transition-colors focus:border-brand-accent"
        />
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label htmlFor={pathToId(path)} className="block text-sm font-semibold text-text-primary">
        {label}
      </label>
      <input
        id={pathToId(path)}
        type="text"
        value={normalizedValue}
        onChange={(event) => onValueChange(path, event.target.value)}
        className="w-full rounded-2xl border border-brand-light bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-brand-accent"
      />
    </div>
  );
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");

  const [activePage, setActivePage] = useState<string>("home");
  const [content, setContent] = useState<JsonObject>({});
  const [rawJson, setRawJson] = useState("{\n\n}");
  const [savedJson, setSavedJson] = useState("{\n\n}");
  const [editorMode, setEditorMode] = useState<EditorMode>("guided");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [jsonParseError, setJsonParseError] = useState("");

  const activePageLabel = PAGES.find((page) => page.slug === activePage)?.label ?? activePage;
  const previewHref = activePage === "home" ? "/" : `/${activePage}`;
  const topLevelEntries = Object.entries(content).filter(([key]) => key !== "_meta");

  async function handleLogin() {
    setAuthError("");

    try {
      const response = await fetch("/api/content/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setAuthed(true);
        return;
      }

      const body = await response.json().catch(() => null);
      setAuthError((body as { error?: string } | null)?.error || "Could not verify password.");
    } catch {
      setAuthError("Could not reach the server. Try again.");
    }
  }

  async function loadContent(page: string) {
    setStatus("loading");
    setMessage("");
    setJsonParseError("");

    try {
      const response = await fetch(`/api/content?page=${page}`);

      if (response.status === 404) {
        const emptyContent: JsonObject = {};
        const emptyJson = formatJson(emptyContent);
        setContent(emptyContent);
        setRawJson(emptyJson);
        setSavedJson(emptyJson);
        setStatus("idle");
        setMessage("No content is stored yet. Guided fields start from a blank draft and save as JSON.");
        return;
      }

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error((body as { error?: string } | null)?.error || `${response.status}`);
      }

      const loadedContent = (await response.json()) as JsonObject;
      const formatted = formatJson(loadedContent);
      setContent(loadedContent);
      setRawJson(formatted);
      setSavedJson(formatted);
      setStatus("idle");
    } catch (error) {
      setStatus("error");
      setMessage(`Failed to load content: ${error}`);
    }
  }

  function applyStructuredChange(nextContent: JsonObject) {
    const formatted = formatJson(nextContent);
    setContent(nextContent);
    setRawJson(formatted);
    setJsonParseError("");
    if (status === "success" || status === "error") {
      setStatus("idle");
      setMessage("");
    }
  }

  function handleValueChange(path: EditorPath, nextValue: JsonValue) {
    applyStructuredChange(updateJsonValue(content, path, nextValue) as JsonObject);
  }

  function handleAddArrayItem(path: EditorPath) {
    const arrayValue = getJsonValue(content, path);
    if (!Array.isArray(arrayValue)) return;

    const nextArray = [...arrayValue, createEmptyValueFromSample(arrayValue[0])];
    applyStructuredChange(updateJsonValue(content, path, nextArray) as JsonObject);
  }

  function handleRemoveArrayItem(path: EditorPath, index: number) {
    const arrayValue = getJsonValue(content, path);
    if (!Array.isArray(arrayValue)) return;

    const nextArray =
      arrayValue.length <= 1
        ? [createEmptyValueFromSample(arrayValue[0])]
        : arrayValue.filter((_, itemIndex) => itemIndex !== index);

    applyStructuredChange(updateJsonValue(content, path, nextArray) as JsonObject);
  }

  function handleRawJsonChange(nextRawJson: string) {
    setRawJson(nextRawJson);

    try {
      const parsed = parseJsonObject(nextRawJson);
      setContent(parsed);
      setJsonParseError("");
      if (status === "success" || status === "error") {
        setStatus("idle");
        setMessage("");
      }
    } catch (error) {
      setJsonParseError(error instanceof Error ? error.message : "Invalid JSON.");
    }
  }

  function handleModeSwitch(nextMode: EditorMode) {
    if (nextMode === "guided") {
      try {
        const parsed = parseJsonObject(rawJson);
        setContent(parsed);
        setJsonParseError("");
      } catch (error) {
        setJsonParseError(error instanceof Error ? error.message : "Invalid JSON.");
        setStatus("error");
        setMessage("Fix the JSON syntax before switching back to the guided editor.");
        return;
      }
    }

    setEditorMode(nextMode);
  }

  async function handleSave() {
    setStatus("saving");
    setMessage("");

    let parsedContent: JsonObject;

    try {
      parsedContent = parseJsonObject(rawJson);
    } catch (error) {
      setStatus("error");
      setJsonParseError(error instanceof Error ? error.message : "Invalid JSON.");
      setMessage("The advanced JSON has a syntax issue. Fix it before saving.");
      return;
    }

    try {
      const response = await fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ page: activePage, content: parsedContent }),
      });

      const body = await response.json().catch(() => null);

      if (response.status === 401) {
        setStatus("error");
        setMessage((body as { error?: string } | null)?.error || "Unauthorized. Check the admin password.");
        return;
      }

      if (!response.ok) {
        throw new Error((body as { error?: string } | null)?.error || `${response.status}`);
      }

      const formatted = formatJson(parsedContent);
      setContent(parsedContent);
      setRawJson(formatted);
      setSavedJson(formatted);
      setStatus("success");
      setMessage("Saved. The public site refreshes within about 60 seconds.");
    } catch (error) {
      setStatus("error");
      setMessage(`Save failed: ${error}`);
    }
  }

  function handleReset() {
    try {
      const parsed = parseJsonObject(savedJson);
      setContent(parsed);
      setRawJson(savedJson);
      setJsonParseError("");
      setStatus("idle");
      setMessage("Reverted to the last saved version.");
    } catch {
      setStatus("error");
      setMessage("Could not reset because the saved version is invalid.");
    }
  }

  useEffect(() => {
    if (!authed) return;
    void loadContent(activePage);
  }, [authed, activePage]);

  const hasChanges = rawJson !== savedJson;

  if (!authed) {
    return (
      <div
        className="min-h-screen bg-brand-primary-dark px-4 py-8 text-white"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(45,74,44,0.82), rgba(45,74,44,0.9)), url('/brand/curated/bg/green-watermark-tall.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center">
          <div className="grid w-full max-w-4xl gap-8 lg:grid-cols-[minmax(0,1.15fr)_420px] lg:items-center">
            <div className="text-center lg:text-left">
              <BrandLockup theme="dark" size="md" className="mx-auto lg:mx-0" />
              <h1 className="mt-6 text-4xl font-bold font-heading text-white md:text-5xl">
                Website editing without raw-code stress.
              </h1>
              <p className="mt-4 max-w-2xl text-base text-white/92 md:text-lg">
                Sign in to edit the site in a guided layout. The admin still saves JSON in the background, but you can
                work with labeled fields first.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/92 p-6 text-text-primary shadow-[0_30px_70px_-34px_rgba(0,0,0,0.45)] backdrop-blur-md md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary/70">Admin Sign In</p>
              <h2 className="mt-2 text-2xl font-bold font-heading text-text-primary">Open the guided editor</h2>
              <p className="mt-2 text-sm text-text-muted">
                Use the same admin password. Once you are in, the page content is organized into editable sections and
                repeatable cards.
              </p>

              <input
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  if (authError) setAuthError("");
                }}
                onKeyDown={(event) => event.key === "Enter" && void handleLogin()}
                placeholder="Admin password"
                className="mt-6 w-full rounded-2xl border border-brand-light bg-white px-4 py-3 text-base text-text-primary outline-none transition-colors focus:border-brand-accent"
              />

              {authError && (
                <p className="mt-3 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {authError}
                </p>
              )}

              <button
                type="button"
                onClick={() => void handleLogin()}
                disabled={!password.trim()}
                className="mt-6 w-full rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary px-5 py-3 text-base font-semibold text-white shadow-[0_18px_36px_-22px_rgba(45,74,44,0.5)] transition-all hover:from-brand-primary-dark hover:to-brand-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-soft text-text-primary">
      <header
        className="border-b border-brand-light/80 text-white"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(45,74,44,0.9), rgba(45,74,44,0.84)), url('/brand/curated/bg/green-watermark-tall.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <BrandLockup theme="dark" size="sm" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/78">Guided Site Editor</p>
              <h1 className="mt-1 text-3xl font-bold font-heading text-white md:text-[2.35rem]">
                Edit content the simple way.
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-white/90 md:text-base">
                This editor writes JSON for the site automatically. Guided mode is for normal editing. Advanced JSON is
                there only when you need it.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={previewHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/28 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/16"
              >
                Preview Page
              </a>
              <button
                type="button"
                onClick={() => {
                  setAuthed(false);
                  setPassword("");
                  setAuthError("");
                }}
                className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-sm font-semibold text-white/90 transition-colors hover:bg-white/14"
              >
                Sign Out
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-white/88">
            {status === "loading" && <span>Loading content...</span>}
            {status === "saving" && <span>Saving changes...</span>}
            {hasChanges && status !== "saving" && (
              <span className="rounded-full border border-white/18 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                Unsaved changes
              </span>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[220px_minmax(0,1fr)_320px]">
          <aside className="rounded-[1.8rem] border border-brand-light/80 bg-white/84 p-4 shadow-[0_20px_46px_-30px_rgba(38,61,39,0.24)]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">Pages</p>
            <nav className="space-y-1.5">
              {PAGES.map((page) => (
                <button
                  key={page.slug}
                  type="button"
                  onClick={() => setActivePage(page.slug)}
                  className={`w-full rounded-2xl px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    activePage === page.slug
                      ? "bg-brand-primary text-white shadow-[0_14px_28px_-20px_rgba(45,74,44,0.5)]"
                      : "text-text-secondary hover:bg-brand-soft hover:text-text-primary"
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </nav>
          </aside>

          <main className="space-y-5">
            <section className="overflow-hidden rounded-[1.9rem] border border-brand-light/80 bg-white/88 shadow-[0_22px_54px_-30px_rgba(38,61,39,0.26)]">
              <div className="border-b border-brand-light/70 bg-brand-soft/55 px-5 py-4 md:px-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">Editing</p>
                    <h2 className="mt-1 text-2xl font-bold font-heading text-text-primary">{activePageLabel}</h2>
                    <p className="mt-1 text-sm text-text-muted">
                      Change the labeled fields below. The site still saves a JSON file behind the scenes.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleModeSwitch("guided")}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                        editorMode === "guided"
                          ? "bg-brand-primary text-white"
                          : "bg-white text-text-secondary hover:bg-brand-light"
                      }`}
                    >
                      Guided Editor
                    </button>
                    <button
                      type="button"
                      onClick={() => handleModeSwitch("json")}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                        editorMode === "json"
                          ? "bg-brand-primary text-white"
                          : "bg-white text-text-secondary hover:bg-brand-light"
                      }`}
                    >
                      Advanced JSON
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-5 py-5 md:px-6">
                {editorMode === "guided" ? (
                  <div className="space-y-5">
                    {topLevelEntries.length === 0 ? (
                      <div className="rounded-[1.6rem] border border-dashed border-brand-light bg-brand-soft/45 px-5 py-8 text-center">
                        <p className="text-lg font-semibold text-text-primary">This page is blank right now.</p>
                        <p className="mt-2 text-sm text-text-muted">
                          Switch to Advanced JSON if you want to paste starter content, or begin by adding content to
                          the stored JSON first.
                        </p>
                      </div>
                    ) : (
                      topLevelEntries.map(([fieldKey, fieldValue]) => (
                        <GuidedField
                          key={fieldKey}
                          fieldKey={fieldKey}
                          value={fieldValue}
                          path={[fieldKey]}
                          onValueChange={handleValueChange}
                          onAddArrayItem={handleAddArrayItem}
                          onRemoveArrayItem={handleRemoveArrayItem}
                        />
                      ))
                    )}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-brand-light/90 bg-brand-soft/45 px-4 py-3 text-sm text-text-muted">
                      This is the same saved content, just in raw JSON form. If the syntax breaks here, Guided Editor
                      will pause until it is valid again.
                    </div>
                    <textarea
                      value={rawJson}
                      onChange={(event) => handleRawJsonChange(event.target.value)}
                      spellCheck={false}
                      className="min-h-[540px] w-full rounded-[1.5rem] border border-brand-light bg-white p-4 font-mono text-sm leading-relaxed text-text-primary outline-none transition-colors focus:border-brand-accent"
                    />
                    {jsonParseError && (
                      <p className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
                        JSON issue: {jsonParseError}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="border-t border-brand-light/70 bg-brand-soft/45 px-5 py-4 md:px-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="text-sm text-text-muted">
                    Guided mode keeps the content human-friendly. Save writes to the same JSON storage the site already
                    uses.
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      disabled={!hasChanges || status === "saving"}
                      className="rounded-full border border-brand-light bg-white px-4 py-2 text-sm font-semibold text-text-secondary transition-colors hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-45"
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      onClick={() => void handleSave()}
                      disabled={status === "saving" || status === "loading"}
                      className="rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary px-5 py-2 text-sm font-semibold text-white shadow-[0_16px_32px_-20px_rgba(45,74,44,0.5)] transition-all hover:from-brand-primary-dark hover:to-brand-primary disabled:cursor-not-allowed disabled:opacity-45"
                    >
                      {status === "saving" ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {message && (
              <div
                className={`rounded-[1.5rem] border px-4 py-3 text-sm ${
                  status === "error"
                    ? "border-red-100 bg-red-50 text-red-700"
                    : status === "success"
                      ? "border-emerald-100 bg-emerald-50 text-emerald-700"
                      : "border-blue-100 bg-blue-50 text-blue-700"
                }`}
              >
                {message}
              </div>
            )}
          </main>

          <aside className="space-y-5">
            <section
              className="overflow-hidden rounded-[1.9rem] border border-brand-light/75 text-white shadow-[0_22px_50px_-30px_rgba(38,61,39,0.32)]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(45,74,44,0.82), rgba(45,74,44,0.9)), url('/brand/curated/bg/green-watermark-tall.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="px-5 py-5">
                <BrandLockup theme="dark" size="sm" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/72">Visual Snapshot</p>
                <h3 className="mt-2 text-2xl font-bold font-heading text-white">{activePageLabel}</h3>
                <p className="mt-2 text-sm text-white/88">
                  This side panel shows the current section structure so the editor feels closer to the public site
                  layout.
                </p>
                <a
                  href={previewHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-full border border-white/24 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/16"
                >
                  Open Public Page
                </a>
              </div>
            </section>

            <section className="rounded-[1.8rem] border border-brand-light/80 bg-white/84 p-4 shadow-[0_20px_46px_-30px_rgba(38,61,39,0.24)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">Sections</p>
              <div className="mt-3 space-y-3">
                {topLevelEntries.length === 0 ? (
                  <p className="text-sm text-text-muted">No sections stored yet for this page.</p>
                ) : (
                  topLevelEntries.map(([sectionKey, sectionValue]) => (
                    <div
                      key={sectionKey}
                      className="rounded-[1.4rem] border border-brand-light/75 bg-brand-soft/45 p-4"
                    >
                      <p className="text-sm font-semibold text-text-primary">{humanizeKey(sectionKey)}</p>
                      <p className="mt-1 text-sm text-text-muted">
                        {(getSectionSummary(sectionValue) ?? "Structured content block").slice(0, 130)}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </section>

            <section className="rounded-[1.8rem] border border-brand-light/80 bg-white/84 p-4 shadow-[0_20px_46px_-30px_rgba(38,61,39,0.24)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">Editing Tips</p>
              <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                <li>Guided Editor is the safest mode for normal updates.</li>
                <li>Advanced JSON is still available if someone technical needs it.</li>
                <li>Removing a key lets the page fall back to its hardcoded default.</li>
                <li>Changes save to Blob storage and refresh on the public site in about 60 seconds.</li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
