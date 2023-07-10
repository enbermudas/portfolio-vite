import { AppTabs } from "@/data/mainMenu.data";
import { init } from "@rematch/core";
import { describe, expect, it } from "vitest";

import { RootModel, models } from "./models";
import { Langs } from "./models/lang";

describe("Rematch store", () => {
  describe("[tabs] model", () => {
    it("should change the current tab", async () => {
      const store = init<RootModel>({ models });

      await store.dispatch.tabs.changeTab(AppTabs.SKILLS);

      const modelData = store.getState().tabs;

      expect(modelData.currentTab).toBe(AppTabs.SKILLS);
    });
  });

  describe("[lang] model", () => {
    it("should change the current language", async () => {
      const store = init<RootModel>({ models });

      await store.dispatch.lang.changeLang(Langs.EN);

      const modelData = store.getState().lang;

      expect(modelData.currentLang).toBe(Langs.EN);
    });
  });
});
