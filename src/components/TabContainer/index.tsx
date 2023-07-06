import { AppTabs } from "../../App";
import Container from "../Container";
import Home from "./Home";
import Search from "./Search";

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
  return (
    <Container className="w-full overflow-auto" noPadding>
      {getCurrentTab(activeTab)}
    </Container>
  );
};

export default TabContainer;
