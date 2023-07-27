import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faGear, faPenNib, faUser } from "@fortawesome/free-solid-svg-icons";

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  icon: IconDefinition;
  link: string;
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Portfolio Vite",
    description: "portfolio",
    icon: faUser,
    link: "https://github.com/enbermudas/portfolio-vite",
  },
  {
    id: 2,
    title: "Poetry",
    description: "poemsSearch",
    icon: faPenNib,
    link: "https://enbermudas.github.io/poetry/",
  },
  {
    id: 3,
    title: "Fail Express",
    description: "middleware",
    icon: faGear,
    link: "https://github.com/enbermudas/fail-express",
  },
  {
    id: 3,
    title: "NPG",
    description: "library",
    icon: faGear,
    link: "https://github.com/enbermudas/npg",
  },
  {
    id: 4,
    title: "Guess me",
    description: "minigame",
    icon: faGamepad,
    link: "https://enbermudas.github.io/guessme/",
  },
  {
    id: 6,
    title: "Windows 98",
    description: "portfolio",
    icon: faUser,
    link: "https://github.com/enbermudas/portfolio",
  },
  {
    id: 7,
    title: "Types Doodler",
    description: "library",
    icon: faGear,
    link: "https://enbermudez.github.io/types-doodler/",
  },
];

export default projectsData;
