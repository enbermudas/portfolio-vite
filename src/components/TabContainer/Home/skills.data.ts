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

export interface Skill {
  id: string;
  name: string;
  level: string;
  color: string;
  icon: IconDefinition;
}

const skillsData: Skill[] = [
  {
    id: "skill-react",
    name: "React",
    level: "Competente",
    color: "#61dafb",
    icon: faReact,
  },
  {
    id: "skill-node",
    name: "Node.js",
    level: "Competente",
    color: "#7cc327",
    icon: faNodeJs,
  },
  {
    id: "skill-js",
    name: "Javascript",
    level: "Competente",
    color: "#e4d04b",
    icon: faJs,
  },
  {
    id: "skill-python",
    name: "Python",
    level: "Competente",
    color: "#6792b6",
    icon: faPython,
  },
  {
    id: "skill-git",
    name: "Git",
    level: "Competente",
    color: "#f64d27",
    icon: faGit,
  },
  {
    id: "skill-css3",
    name: "CSS3",
    level: "Competente",
    color: "#2891c4",
    icon: faCss3,
  },
  {
    id: "skill-sass",
    name: "Sass",
    level: "Competente",
    color: "#cd508e",
    icon: faSass,
  },
  {
    id: "skill-figma",
    name: "Figma",
    level: "Familiarizado",
    color: "#f26c5d",
    icon: faFigma,
  },
  {
    id: "skill-jira",
    name: "Jira",
    level: "Familiarizado",
    color: "#247df2",
    icon: faJira,
  },
];

export default skillsData;
