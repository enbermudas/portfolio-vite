import Container from "../Container";
import { AppTabs } from "../MainMenu/mainMenu.data";
import Experience from "./Experience";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

interface TabContainerProps {
  activeTab: AppTabs;
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

const TabContainer = ({ activeTab }: TabContainerProps) => {
  return (
    <Container className="w-full overflow-auto" noPadding>
      <Header />
      {getCurrentTab(activeTab)}
    </Container>
  );
};

export default TabContainer;
