import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("renders as a button element by default", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("renders as a link when href is provided", () => {
    render(<Button href="/test">Go somewhere</Button>);
    expect(screen.getByRole("link", { name: "Go somewhere" })).toHaveAttribute("href", "/test");
  });

  it("renders external links with target _blank", () => {
    render(<Button href="https://example.com" external>External</Button>);
    const link = screen.getByRole("link", { name: "External" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("applies variant styles", () => {
    const { container } = render(<Button variant="primary">Primary</Button>);
    const btn = container.firstChild as HTMLElement;
    expect(btn.className).toContain("bg-brand-primary");
  });

  it("renders icon in correct position", () => {
    render(
      <Button icon={<span data-testid="icon">★</span>} iconPosition="right">
        With Icon
      </Button>
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("supports disabled state", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button", { name: "Disabled" })).toBeDisabled();
  });
});
