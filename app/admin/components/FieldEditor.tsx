"use client";

import { useState } from "react";

function humanizeKey(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

function isLongField(key: string, value: string): boolean {
  return (
    value.length > 80 ||
    /subtitle|description|body|quote|intro|note|footnote|approach/i.test(key)
  );
}

function deepGet(obj: unknown, path: string[]): unknown {
  let current = obj;
  for (const key of path) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

interface FieldInputProps {
  label: string;
  value: string;
  path: string[];
  onChange: (path: string[], value: string) => void;
  isChanged: boolean;
}

function FieldInput({ label, value, path, onChange, isChanged }: FieldInputProps) {
  const isLong = isLongField(path[path.length - 1], value);
  const borderClass = isChanged
    ? "border-amber-400 bg-amber-50/30"
    : "border-gray-200";

  return (
    <div className="mb-4">
      <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
        {label}
        {isChanged && (
          <span className="text-[10px] font-normal text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded normal-case">
            edited
          </span>
        )}
      </label>
      {isLong ? (
        <textarea
          value={value}
          rows={3}
          onChange={(e) => onChange(path, e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 text-sm outline-none resize-y focus:border-green-500 focus:ring-1 focus:ring-green-500 ${borderClass}`}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(path, e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 ${borderClass}`}
        />
      )}
    </div>
  );
}

interface CollapsibleSectionProps {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({ label, children, defaultOpen = true }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4 border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <span className="text-sm font-semibold text-gray-700">{label}</span>
        <span className="text-gray-400 text-xs">{isOpen ? "▼" : "▶"}</span>
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
}

interface RecursiveFieldsProps {
  content: unknown;
  originalContent: unknown;
  path: string[];
  onChange: (path: string[], value: string) => void;
}

function RecursiveFields({ content, originalContent, path, onChange }: RecursiveFieldsProps) {
  if (content == null || typeof content !== "object") return null;

  if (Array.isArray(content)) {
    return (
      <>
        {content.map((item, idx) => {
          const itemPath = [...path, String(idx)];
          const origItem = Array.isArray(originalContent) ? originalContent[idx] : undefined;

          if (typeof item === "string") {
            const origStr = typeof origItem === "string" ? origItem : item;
            return (
              <FieldInput
                key={idx}
                label={`Item ${idx + 1}`}
                value={item}
                path={itemPath}
                onChange={onChange}
                isChanged={item !== origStr}
              />
            );
          }

          if (typeof item === "object" && item !== null) {
            const title = (item as Record<string, unknown>).title ||
              (item as Record<string, unknown>).name ||
              (item as Record<string, unknown>).author ||
              `Item ${idx + 1}`;
            return (
              <CollapsibleSection key={idx} label={String(title)} defaultOpen={false}>
                <RecursiveFields
                  content={item}
                  originalContent={origItem}
                  path={itemPath}
                  onChange={onChange}
                />
              </CollapsibleSection>
            );
          }

          return null;
        })}
      </>
    );
  }

  const entries = Object.entries(content as Record<string, unknown>);

  return (
    <>
      {entries.map(([key, value]) => {
        const currentPath = [...path, key];
        const origValue = originalContent && typeof originalContent === "object"
          ? (originalContent as Record<string, unknown>)[key]
          : undefined;

        // Skip non-editable fields
        if (typeof value === "number" || typeof value === "boolean") return null;

        if (typeof value === "string") {
          return (
            <FieldInput
              key={key}
              label={humanizeKey(key)}
              value={value}
              path={currentPath}
              onChange={onChange}
              isChanged={value !== origValue}
            />
          );
        }

        if (Array.isArray(value)) {
          return (
            <CollapsibleSection key={key} label={humanizeKey(key)} defaultOpen={false}>
              <RecursiveFields
                content={value}
                originalContent={origValue}
                path={currentPath}
                onChange={onChange}
              />
            </CollapsibleSection>
          );
        }

        if (typeof value === "object" && value !== null) {
          return (
            <CollapsibleSection key={key} label={humanizeKey(key)}>
              <RecursiveFields
                content={value}
                originalContent={origValue}
                path={currentPath}
                onChange={onChange}
              />
            </CollapsibleSection>
          );
        }

        return null;
      })}
    </>
  );
}

interface FieldEditorProps {
  pageKey: string;
  content: unknown;
  originalContent: unknown;
  onChange: (path: string[], value: string) => void;
}

export function FieldEditor({ pageKey, content, originalContent, onChange }: FieldEditorProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-white">
      <div className="p-6 max-w-2xl">
        <h2 className="text-lg font-bold text-gray-900 mb-1">{humanizeKey(pageKey)}</h2>
        <p className="text-xs text-gray-400 mb-6">Edit text content for this page. Changes are highlighted in amber.</p>
        <RecursiveFields
          content={content}
          originalContent={originalContent}
          path={[pageKey]}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
