import { AppTabs } from "@/data/mainMenu.data";
import { RootState } from "@/store";
import { connect } from "react-redux";

import Container from "@/components/Container";

import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";

interface TabContainerProps {
  tabs: {
    currentTab: AppTabs;
  };
}

const getCurrentTab = (tab: AppTabs) => {
  const obj = {
    [AppTabs.HOME]: <Home />,
    [AppTabs.SKILLS]: <Skills />,
  };

  return obj[tab];
};

const mapState = (state: RootState) => ({
  tabs: state.tabs,
});

const TabContainer = ({ tabs: { currentTab } }: TabContainerProps) => {
  return (
    <Container id="tabcontainer" className="w-full overflow-auto" noPadding>
      <Header />
      {getCurrentTab(currentTab)}
      <Footer />
    </Container>
  );
};

export default connect(mapState)(TabContainer);
