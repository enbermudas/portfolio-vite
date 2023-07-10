import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Footer from ".";

describe("Footer", () => {
  it("should render all the social links", async () => {
    const { container } = await render(<Footer />);

    const anchorTags = container.querySelectorAll("a");

    expect(anchorTags.length).toBe(4);
  });
});
