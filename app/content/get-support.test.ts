import { describe, expect, it } from "vitest";
import { getSupportContent } from "./get-support";

describe("getSupportContent", () => {
  it("keeps separate one-tap call and text actions for the 988 Lifeline", () => {
    expect(getSupportContent.crisis.actions).toEqual([
      { label: "Call 988", href: "tel:988" },
      { label: "Text 988", href: "sms:988" },
    ]);
  });
});
