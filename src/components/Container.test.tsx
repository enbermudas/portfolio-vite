import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Container from "./Container";

describe("Container", () => {
  it("should render the container with given className", async () => {
    const { getByTestId } = await render(<Container id="test1" className="test-classname" />);

    const container = getByTestId("container-test1");
    expect(container.classList.contains("test-classname")).toBeTruthy();
  });

  it("should render the container with no padding", async () => {
    const { getByTestId } = await render(<Container id="test1" noPadding />);

    const container = getByTestId("container-test1");
    const classes = container.classList;

    expect(!classes.contains("px-4")).toBeTruthy();
    expect(!classes.contains("py-2")).toBeTruthy();
  });
});
