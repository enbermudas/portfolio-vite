import quickInfoData from "@/data/quickInfo.data";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import QuickInfo from "./QuickInfo";

describe("QuickInfo", () => {
  it("should render all the quick info elements", async () => {
    const { getByTestId } = await render(<QuickInfo />);

    quickInfoData.forEach(({ id }) => {
      const infoContainer = getByTestId(`qi-${id}`);
      expect(infoContainer).toBeDefined();
    });
  });
});
