import { faBook, faFolderOpen, faHouse, faStar } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface MenuOption {
  id: number;
  tab: AppTabs;
  title: string;
  icon: IconDefinition;
}

export enum AppTabs {
  HOME,
  SKILLS,
  PROJECTS,
  EXPERIENCE,
}

const mainMenuData: MenuOption[] = [
  {
    id: 1,
    tab: AppTabs.HOME,
    title: "mainMenu.home",
    icon: faHouse,
  },
  {
    id: 2,
    tab: AppTabs.SKILLS,
    title: "mainMenu.skills",
    icon: faBook,
  },
  {
    id: 3,
    tab: AppTabs.PROJECTS,
    title: "mainMenu.projects",
    icon: faFolderOpen,
  },
  {
    id: 4,
    tab: AppTabs.EXPERIENCE,
    title: "mainMenu.experience",
    icon: faStar,
  },
];

export default mainMenuData;
