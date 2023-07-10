import testWrapper from "@/test-wrapper";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import MainMenu from ".";

describe("MainMenu", () => {
  it("should render all the main menu elements", async () => {
    const { container } = await render(testWrapper(<MainMenu />));

    const liElements = container.querySelectorAll("li");

    expect(liElements.length).toBe(2);
  });
});
