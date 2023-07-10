import { RootState } from "@/store";
import { connect } from "react-redux";

import Container from "../Container";
import { AppTabs } from "../MainMenu/mainMenu.data";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
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
    [AppTabs.PROJECTS]: <Projects />,
    [AppTabs.EXPERIENCE]: <Experience />,
  };

  return obj[tab];
};

const mapState = (state: RootState) => ({
  tabs: state.tabs,
});

const TabContainer = ({ tabs: { currentTab } }: TabContainerProps) => {
  return (
    <Container className="w-full overflow-auto" noPadding>
      <Header />
      {getCurrentTab(currentTab)}
      <Footer />
    </Container>
  );
};

export default connect(mapState)(TabContainer);
