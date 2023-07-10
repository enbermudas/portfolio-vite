import { Models } from "@rematch/core";

import { lang } from "./lang";
import { tabs } from "./tabs";

export interface RootModel extends Models<RootModel> {
  lang: typeof lang;
  tabs: typeof tabs;
}

export const models: RootModel = { lang, tabs };
