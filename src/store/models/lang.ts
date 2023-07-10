import { createModel } from "@rematch/core";

import { RootModel } from ".";

export enum Langs {
  ES = "es",
  EN = "en",
}

export const lang = createModel<RootModel>()({
  state: {
    currentLang: Langs.ES,
  },
  reducers: {
    changeLang(state, newLang: Langs) {
      return { ...state, currentLang: newLang };
    },
  },
});
