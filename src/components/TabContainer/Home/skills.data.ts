import {
  faCss3,
  faDocker,
  faFigma,
  faGit,
  faJira,
  faJs,
  faNodeJs,
  faNpm,
  faPython,
  faReact,
  faSass,
  faTrello,
  faUbuntu,
  faVuejs,
  faYarn,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export enum SkillLevel {
  FAVORITE,
  PROFICIENT,
  ADVANCED,
  INTERMEDIATE,
  BEGINNER,
  ACQUAINTED,
}

export interface SkillData {
  id: string;
  name: string;
  level: SkillLevel;
  color: string;
  icon: IconDefinition;
}

export const skillTranslations = {
  [SkillLevel.ACQUAINTED]: "Familiarizado",
  [SkillLevel.BEGINNER]: "Principiante",
  [SkillLevel.INTERMEDIATE]: "Intermedio",
  [SkillLevel.ADVANCED]: "Avanzado",
  [SkillLevel.PROFICIENT]: "Proficiente",
  [SkillLevel.FAVORITE]: "Favorito",
};

const skillsData: SkillData[] = [
  {
    id: "skill-react",
    name: "React",
    level: SkillLevel.FAVORITE,
    color: "#61dafb",
    icon: faReact,
  },
  {
    id: "skill-node",
    name: "Node.js",
    level: SkillLevel.INTERMEDIATE,
    color: "#7cc327",
    icon: faNodeJs,
  },
  {
    id: "skill-js",
    name: "Javascript",
    level: SkillLevel.FAVORITE,
    color: "#e4d04b",
    icon: faJs,
  },
  {
    id: "skill-python",
    name: "Python",
    level: SkillLevel.ADVANCED,
    color: "#6792b6",
    icon: faPython,
  },
  {
    id: "skill-git",
    name: "Git",
    level: SkillLevel.INTERMEDIATE,
    color: "#f64d27",
    icon: faGit,
  },
  {
    id: "skill-css3",
    name: "CSS3",
    level: SkillLevel.PROFICIENT,
    color: "#2891c4",
    icon: faCss3,
  },
  {
    id: "skill-docker",
    name: "Docker",
    level: SkillLevel.ACQUAINTED,
    color: "#008bda",
    icon: faDocker,
  },
  {
    id: "skill-sass",
    name: "Sass",
    level: SkillLevel.ADVANCED,
    color: "#cd508e",
    icon: faSass,
  },
  {
    id: "skill-figma",
    name: "Figma",
    level: SkillLevel.INTERMEDIATE,
    color: "#f26c5d",
    icon: faFigma,
  },
  {
    id: "skill-jira",
    name: "Jira",
    level: SkillLevel.INTERMEDIATE,
    color: "#247df2",
    icon: faJira,
  },
  {
    id: "skill-vuejs",
    name: "Vue.js",
    level: SkillLevel.ACQUAINTED,
    color: "#63a779",
    icon: faVuejs,
  },
  {
    id: "skill-ubuntu",
    name: "Ubuntu",
    level: SkillLevel.BEGINNER,
    color: "#db5424",
    icon: faUbuntu,
  },
  {
    id: "skill-trello",
    name: "Trello",
    level: SkillLevel.BEGINNER,
    color: "#0073b5",
    icon: faTrello,
  },
  {
    id: "skill-npm",
    name: "NPM",
    level: SkillLevel.ADVANCED,
    color: "#c13534",
    icon: faNpm,
  },
  {
    id: "skill-yarn",
    name: "Yarn",
    level: SkillLevel.ADVANCED,
    color: "#2a87b1",
    icon: faYarn,
  },
].sort((a, b) => (a.level < b.level ? -1 : 1));

export default skillsData;
