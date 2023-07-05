import Container from "../Container";
import Home from "./Home";
import Search from "./Search";

import { AppTabs } from "../../App";

interface TabContainerProps {
  activeTab: AppTabs;
}

const getCurrentTab = (tab: AppTabs) => {
  const obj = {
    [AppTabs.HOME]: <Home />,
    [AppTabs.SEARCH]: <Search />,
  };

  return obj[tab];
};

const TabContainer = ({ activeTab }: TabContainerProps) => {
  return <Container className="w-full">{getCurrentTab(activeTab)}</Container>;
};

export default TabContainer;
