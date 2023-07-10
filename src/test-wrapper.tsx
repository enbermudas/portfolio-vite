import type { JSX, ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "./store";

const testWrapper = (children: ReactNode): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

export default testWrapper;
