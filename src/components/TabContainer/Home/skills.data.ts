import {
  faCss3,
  faFigma,
  faGit,
  faJira,
  faJs,
  faNodeJs,
  faPython,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export enum SkillLevel {
  FAVORITE,
  PROFICIENT,
  ADVANCED,
  INTERMEDIATE,
  BEGINNER,
}

export interface SkillData {
  id: string;
  name: string;
  level: SkillLevel;
  color: string;
  icon: IconDefinition;
}

export const skillTranslations = {
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
    level: SkillLevel.ADVANCED,
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
    level: SkillLevel.ADVANCED,
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
].sort((a, b) => (a.level < b.level ? -1 : 1));

export default skillsData;
