"use client";

const pages = [
  { key: "home", label: "Home", route: "/" },
  { key: "about", label: "About", route: "/about" },
  { key: "services", label: "Services", route: "/services" },
  { key: "contact", label: "Contact", route: "/contact" },
  { key: "donate", label: "Donate", route: "/donate" },
  { key: "forReferrers", label: "For Referrers", route: "/for-referrers" },
  { key: "forGrantWriters", label: "Grant Writers", route: "/for-grant-writers" },
  { key: "getSupport", label: "Get Support", route: "/get-support" },
  { key: "testimonials", label: "Testimonials", route: "/testimonials" },
  { key: "forms", label: "Forms", route: "/forms" },
  { key: "privacy", label: "Privacy", route: "/privacy" },
  { key: "disclaimer", label: "Disclaimer", route: "/disclaimer" },
] as const;

interface PageSelectorProps {
  activePage: string;
  onSelect: (key: string) => void;
}

export function PageSelector({ activePage, onSelect }: PageSelectorProps) {
  return (
    <div className="w-48 bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0">
      <div className="p-3">
        <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-2 px-2">
          Pages
        </p>
        <nav className="space-y-0.5">
          {pages.map((page) => (
            <button
              key={page.key}
              onClick={() => onSelect(page.key)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                activePage === page.key
                  ? "bg-green-50 text-green-800 font-medium"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {page.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
