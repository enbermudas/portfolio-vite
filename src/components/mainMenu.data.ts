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
    title: "Inicio",
    icon: faHouse,
  },
  {
    id: 2,
    tab: AppTabs.SKILLS,
    title: "Conocimientos",
    icon: faBook,
  },
  {
    id: 3,
    tab: AppTabs.PROJECTS,
    title: "Proyectos",
    icon: faFolderOpen,
  },
  {
    id: 4,
    tab: AppTabs.EXPERIENCE,
    title: "Experiencia",
    icon: faStar,
  },
];

export default mainMenuData;
