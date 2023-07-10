import { faBook, faHouse } from "@fortawesome/free-solid-svg-icons";
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
}

const mainMenuData: MenuOption[] = [
  {
    id: 1,
    tab: AppTabs.HOME,
    title: "section.home",
    icon: faHouse,
  },
  {
    id: 2,
    tab: AppTabs.SKILLS,
    title: "section.skills",
    icon: faBook,
  },
];

export default mainMenuData;
