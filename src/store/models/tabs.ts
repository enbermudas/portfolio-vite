import { createModel } from "@rematch/core";

import { AppTabs } from "@/components/MainMenu/mainMenu.data";

import { RootModel } from ".";

export const tabs = createModel<RootModel>()({
  state: {
    currentTab: AppTabs.HOME,
  },
  reducers: {
    changeTab(state, newTab: AppTabs) {
      return { ...state, currentTab: newTab };
    },
  },
});
