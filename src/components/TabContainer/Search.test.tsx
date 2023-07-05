import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Search from "./Search";

describe("@Components/Search", () => {
  test("should render the Search component", () => {
    render(<Search />);
    expect(screen.getByText(/Search/i)).toBeDefined();
  });
});
