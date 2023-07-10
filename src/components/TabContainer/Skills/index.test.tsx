import testWrapper from "@/test-wrapper";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Skills from ".";

describe("Skills", () => {
  it("should render all the skills cards", async () => {
    const { getByTestId } = await render(testWrapper(<Skills />));

    const skillsList = getByTestId("skills-list");

    expect(skillsList.children).to.have.length(17);
  });

  it("should render all the skills captions", async () => {
    const { getByTestId } = await render(testWrapper(<Skills />));

    const skillsList = getByTestId("skills-captions");

    expect(skillsList.children).to.have.length(6);
  });
});
