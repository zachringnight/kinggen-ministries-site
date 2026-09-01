import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import type { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import BackToTopButton from "./BackToTopButton";
import Header from "./Header";
import ServiceAvailabilityCard from "./ServiceAvailabilityCard";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("next/link", () => ({
  default: ({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props}>{children}</a>,
}));

vi.mock("next/image", () => ({
  default: ({
    priority: _priority,
    alt = "",
    ...props
  }: ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => (
    // The real Next.js Image component ultimately renders an image in the browser.
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} />
  ),
}));

afterEach(() => {
  cleanup();
  document.body.style.overflow = "";
  Object.defineProperty(window, "innerWidth", { configurable: true, value: 1024 });
});

describe("public mobile UI", () => {
  it("opens the navigation as a focused modal and restores focus on Escape", async () => {
    render(
      <>
        <Header
          primaryLinks={[{ href: "/about", label: "About" }]}
          secondaryLinks={[{ href: "/privacy", label: "Privacy" }]}
        />
        <main id="main-content">Page content</main>
        <footer>Footer content</footer>
      </>,
    );

    const menuButton = screen.getByRole("button", { name: "Open menu" });
    fireEvent.click(menuButton);

    const drawer = screen.getByRole("dialog", { name: "Mobile navigation menu" });
    const closeButton = within(drawer).getByRole("button", { name: "Close navigation menu" });
    const main = document.querySelector<HTMLElement>("#main-content");
    const footer = document.querySelector<HTMLElement>("footer");
    const header = document.querySelector<HTMLElement>("header");

    await waitFor(() => expect(document.activeElement).toBe(closeButton));
    expect(header?.inert).toBe(true);
    expect(main?.inert).toBe(true);
    expect(footer?.inert).toBe(true);
    expect(within(drawer).queryByRole("link", { name: "Donate Now" })).toBeNull();

    closeButton.focus();
    fireEvent.keyDown(document, { key: "Tab", shiftKey: true });
    expect(document.activeElement).toBe(within(drawer).getByRole("link", { name: "Privacy" }));
    fireEvent.keyDown(document, { key: "Tab" });
    expect(document.activeElement).toBe(closeButton);

    fireEvent.keyDown(document, { key: "Escape" });

    await waitFor(() => expect(screen.queryByRole("dialog", { name: "Mobile navigation menu" })).toBeNull());
    expect(document.activeElement).toBe(menuButton);
    expect(header?.inert).toBe(false);
    expect(main?.inert).toBe(false);
    expect(footer?.inert).toBe(false);
  });

  it("closes the mobile modal and clears its side effects at the desktop breakpoint", async () => {
    Object.defineProperty(window, "innerWidth", { configurable: true, value: 390 });

    render(
      <>
        <Header primaryLinks={[{ href: "/about", label: "About" }]} secondaryLinks={[]} />
        <main id="main-content">Page content</main>
        <footer>Footer content</footer>
      </>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    await screen.findByRole("dialog", { name: "Mobile navigation menu" });

    Object.defineProperty(window, "innerWidth", { configurable: true, value: 1024 });
    fireEvent(window, new Event("resize"));

    await waitFor(() => expect(screen.queryByRole("dialog", { name: "Mobile navigation menu" })).toBeNull());
    expect(document.body.style.overflow).toBe("");
    expect(document.querySelector<HTMLElement>("header")?.inert).toBe(false);
    expect(document.querySelector<HTMLElement>("#main-content")?.inert).toBe(false);
    expect(document.querySelector<HTMLElement>("footer")?.inert).toBe(false);
  });

  it("keeps the floating back-to-top control off narrow screens", () => {
    render(<BackToTopButton />);

    const button = screen.getByRole("button", { name: "Back to top" });
    expect(button.className).toContain("hidden");
    expect(button.className).toContain("md:inline-flex");
  });
});

describe("closed service availability", () => {
  it("puts the current Venture action before the outside-community note", () => {
    render(<ServiceAvailabilityCard showClientInformation />);

    const contact = screen.getByRole("link", { name: "Contact Venture Church" });
    const clientInformation = screen.getByRole("link", { name: "Client Information" });
    const outsideNote = screen.getByText(/outside the Venture Church community/i);

    expect(contact.getAttribute("href")).toBe("https://venturechurch.net/contact/");
    expect(clientInformation.getAttribute("href")).toBe("/get-support");
    expect(contact.compareDocumentPosition(outsideNote) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});
