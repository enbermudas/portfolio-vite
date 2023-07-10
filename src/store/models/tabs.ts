import { AppTabs } from "@/data/mainMenu.data";
import { createModel } from "@rematch/core";

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
