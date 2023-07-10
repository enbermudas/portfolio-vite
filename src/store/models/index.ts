import { Models } from "@rematch/core";

import { tabs } from "./tabs";

export interface RootModel extends Models<RootModel> {
  tabs: typeof tabs;
}

export const models: RootModel = { tabs };
