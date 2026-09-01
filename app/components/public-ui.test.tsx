import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import type { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import BackToTopButton from "./BackToTopButton";
import Header from "./Header";

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
    const firstDrawerLink = within(drawer).getByRole("link", { name: "About" });
    const main = document.querySelector<HTMLElement>("#main-content");
    const footer = document.querySelector<HTMLElement>("footer");

    await waitFor(() => expect(document.activeElement).toBe(firstDrawerLink));
    expect(main?.inert).toBe(true);
    expect(footer?.inert).toBe(true);
    expect(within(drawer).queryByRole("link", { name: "Donate Now" })).toBeNull();

    menuButton.focus();
    fireEvent.keyDown(document, { key: "Tab", shiftKey: true });
    expect(document.activeElement).toBe(within(drawer).getByRole("link", { name: "Privacy" }));

    fireEvent.keyDown(document, { key: "Escape" });

    await waitFor(() => expect(screen.queryByRole("dialog", { name: "Mobile navigation menu" })).toBeNull());
    expect(document.activeElement).toBe(menuButton);
    expect(main?.inert).toBe(false);
    expect(footer?.inert).toBe(false);
  });

  it("keeps the floating back-to-top control off narrow screens", () => {
    render(<BackToTopButton />);

    const button = screen.getByRole("button", { name: "Back to top" });
    expect(button.className).toContain("hidden");
    expect(button.className).toContain("md:inline-flex");
  });
});
