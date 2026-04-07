"use client";

const pageRouteMap: Record<string, string> = {
  home: "/",
  about: "/about",
  services: "/services",
  contact: "/contact",
  donate: "/donate",
  forReferrers: "/for-referrers",
  forGrantWriters: "/for-grant-writers",
  getSupport: "/get-support",
  testimonials: "/testimonials",
  forms: "/forms",
  privacy: "/privacy",
  disclaimer: "/disclaimer",
};

function get(obj: unknown, ...keys: string[]): string {
  let current = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return "";
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : "";
}

function getArr(obj: unknown, ...keys: string[]): unknown[] {
  let current = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return [];
    current = (current as Record<string, unknown>)[key];
  }
  return Array.isArray(current) ? current : [];
}

function PreviewSection({ title, children, variant = "light" }: { title?: string; children: React.ReactNode; variant?: "light" | "dark" | "cream" }) {
  const bgClass = variant === "dark" ? "bg-[#3D5A3D] text-white" : variant === "cream" ? "bg-[#faf8f2]" : "bg-white";
  return (
    <div className={`p-5 ${bgClass}`}>
      {title && (
        <h3 className={`text-base font-bold mb-2 ${variant === "dark" ? "text-white" : "text-gray-900"}`}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

function PreviewCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-gray-200 rounded-lg p-3 mb-2 bg-white">
      {children}
    </div>
  );
}

function HomePreview({ content }: { content: unknown }) {
  return (
    <>
      <PreviewSection variant="dark">
        <p className="text-[10px] uppercase tracking-wider text-white/70 mb-1">
          {get(content, "hero", "badge")}
        </p>
        <h2 className="text-xl font-bold text-white mb-2">{get(content, "hero", "headline")}</h2>
        <p className="text-sm text-white/90 mb-3">{get(content, "hero", "subheadline")}</p>
        <div className="flex gap-2 flex-wrap">
          {getArr(content, "hero", "trustBadges").map((badge, i) => (
            <span key={i} className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded-full">
              {String(badge)}
            </span>
          ))}
        </div>
      </PreviewSection>
      <PreviewSection variant="cream" title={get(content, "about", "title")}>
        <p className="text-sm text-gray-600">{get(content, "about", "subtitle")}</p>
      </PreviewSection>
      <PreviewSection title={get(content, "services", "title")}>
        <p className="text-xs text-gray-500 mb-2">{get(content, "services", "subtitle")}</p>
        {getArr(content, "services", "items").map((item, i) => (
          <PreviewCard key={i}>
            <p className="font-semibold text-sm">{get(item, "title")}</p>
            <p className="text-xs text-gray-500">{get(item, "description")}</p>
          </PreviewCard>
        ))}
      </PreviewSection>
      <PreviewSection variant="dark" title={get(content, "commitment", "title")}>
        <p className="text-sm text-white/90">{get(content, "commitment", "body1")}</p>
      </PreviewSection>
      <PreviewSection variant="cream" title={get(content, "testimonials", "title")}>
        {getArr(content, "testimonials", "items").map((t, i) => (
          <PreviewCard key={i}>
            <p className="text-xs italic text-gray-600">&ldquo;{get(t, "quote")}&rdquo;</p>
            <p className="text-xs font-semibold mt-1">{get(t, "author")} &mdash; {get(t, "role")}</p>
          </PreviewCard>
        ))}
      </PreviewSection>
    </>
  );
}

function GenericPreview({ content }: { content: unknown }) {
  if (content == null || typeof content !== "object") return null;

  return (
    <>
      {Object.entries(content as Record<string, unknown>).map(([key, value]) => {
        if (typeof value === "string") {
          const isTitle = /title|headline/i.test(key);
          return (
            <p key={key} className={isTitle ? "font-bold text-sm mb-1" : "text-xs text-gray-600 mb-2"}>
              {value}
            </p>
          );
        }

        if (Array.isArray(value)) {
          return (
            <div key={key} className="mb-3">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">{key}</p>
              {value.map((item, i) => {
                if (typeof item === "string") {
                  return <p key={i} className="text-xs text-gray-600 ml-2">• {item}</p>;
                }
                if (typeof item === "object" && item !== null) {
                  return (
                    <PreviewCard key={i}>
                      {Object.entries(item as Record<string, unknown>)
                        .filter(([, v]) => typeof v === "string")
                        .map(([k, v]) => (
                          <p key={k} className={/title|name|author|area/i.test(k) ? "text-xs font-semibold" : "text-xs text-gray-500"}>
                            {String(v)}
                          </p>
                        ))}
                    </PreviewCard>
                  );
                }
                return null;
              })}
            </div>
          );
        }

        if (typeof value === "object" && value !== null) {
          const title = (value as Record<string, unknown>).title;
          return (
            <PreviewSection key={key} title={typeof title === "string" ? title : undefined} variant="cream">
              <GenericPreview content={value} />
            </PreviewSection>
          );
        }

        return null;
      })}
    </>
  );
}

interface PreviewPanelProps {
  pageKey: string;
  content: unknown;
}

export function PreviewPanel({ pageKey, content }: PreviewPanelProps) {
  return (
    <div className="w-96 overflow-y-auto border-l border-gray-200 bg-gray-50 flex-shrink-0 hidden lg:block">
      <div className="sticky top-0 bg-gray-50 border-b border-gray-200 px-4 py-2 flex items-center justify-between z-10">
        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Preview</span>
        <a
          href={pageRouteMap[pageKey] || "/"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-green-600 hover:underline"
        >
          Open live page
        </a>
      </div>
      <div className="divide-y divide-gray-200">
        {pageKey === "home" ? (
          <HomePreview content={content} />
        ) : (
          <div className="p-4">
            <GenericPreview content={content} />
          </div>
        )}
      </div>
    </div>
  );
}
