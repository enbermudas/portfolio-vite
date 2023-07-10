import { SkillLevel } from "@/data/skills.data";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProjectDisplayCard, SkillDisplayCard } from "./DisplayCard";
import { DisplayType } from "./DisplayCard";

describe("DisplayCard", () => {
  it("should render the ProjectDisplayCard", async () => {
    const testProject = {
      id: 1,
      title: "title",
      description: "subTitle",
      icon: faReact,
      link: "https://github.com/enbermudas",
      type: DisplayType.PROJECT,
    };

    const { getByTestId } = await render(<ProjectDisplayCard {...testProject} />);

    const container = getByTestId("displaycard-0-1");
    expect(container).toBeDefined();
  });

  it("should render the SkillDisplayCard", async () => {
    const testSkill = {
      id: "1",
      name: "title",
      description: "subTitle",
      icon: faReact,
      link: "https://github.com/enbermudas",
      type: DisplayType.PROJECT,
      level: SkillLevel.FAVORITE,
      color: "#ffffff",
    };

    const { getByTestId } = await render(<SkillDisplayCard {...testSkill} />);

    const container = getByTestId("displaycard-1-1");
    expect(container).toBeDefined();
  });
});
