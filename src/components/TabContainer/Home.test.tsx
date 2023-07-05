import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Home from "./Home";

describe("@Components/Home", () => {
  test("should render the Home component", () => {
    render(<Home />);
    expect(screen.getByText(/Home/i)).toBeDefined();
  });
});
