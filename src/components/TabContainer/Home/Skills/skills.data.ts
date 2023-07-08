import {
  faCss3,
  faDocker,
  faFigma,
  faGit,
  faHtml5,
  faJira,
  faJs,
  faNodeJs,
  faNpm,
  faPhp,
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

export interface SkillTexts {
  [SkillLevel.ACQUAINTED]: string;
  [SkillLevel.BEGINNER]: string;
  [SkillLevel.INTERMEDIATE]: string;
  [SkillLevel.ADVANCED]: string;
  [SkillLevel.PROFICIENT]: string;
  [SkillLevel.FAVORITE]: string;
}

export const skillTranslations: SkillTexts = {
  [SkillLevel.ACQUAINTED]: "Familiarizado",
  [SkillLevel.BEGINNER]: "Principiante",
  [SkillLevel.INTERMEDIATE]: "Intermedio",
  [SkillLevel.ADVANCED]: "Avanzado",
  [SkillLevel.PROFICIENT]: "Proficiente",
  [SkillLevel.FAVORITE]: "Favorito",
};

export const skillDescriptions: SkillTexts = {
  [SkillLevel.ACQUAINTED]:
    "Poseo conocimientos básicos y estoy familiarizado con los conceptos y las tecnologías de programación. Puedo comprender el uso de las herramientas y modificar código existente de manera limitada, pero aún necesito apoyo y orientacfión para abordar proyectos más complejos.",
  [SkillLevel.BEGINNER]:
    "Tengo una compresión elemental de los conceptos básicos y las herramientas, pudiendo programar y hacer uso de herramientas simples con instrucciones directas.",
  [SkillLevel.INTERMEDIATE]:
    "Poseo conocimientos sólidos y una compresión adecuada de la herramienta o lenguaje. Puedo resolver problemas más complejos y trabajar en proyectos de tamaño mediano con cierto grado de independencia.",
  [SkillLevel.ADVANCED]:
    "Poseo conocimiento profundo de las tecnologías y lenguajes. Puedo abordar proyectos complejos con confianza. Tengo las habilidades para optimizar y mejorar el rendimiento del código. También puedo resolver problemas difíciles de manera eficiente.",
  [SkillLevel.PROFICIENT]:
    "Tengo habilidades avanzadas y amplio conocimiento en el área. Soy capaz de abordar proyectos desafiantes y producir soluciones de alta calidad. Tengo buen entendimiento de los principios fundamentales y soy capaz de trabajar de manera autónoma con poca supervisión.",
  [SkillLevel.FAVORITE]:
    "Además de tener habilidades técnicas sólidas, también he desarrollado un enfoque especializado y pasión por este lenguaje, herramienta o framework en particular. Tengo experiencia significativa y la comodidad para trabajar con ellas en cualquier momento.",
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
  {
    id: "skill-html5",
    name: "HTML5",
    level: SkillLevel.PROFICIENT,
    color: "#e56027",
    icon: faHtml5,
  },
  {
    id: "skill-php",
    name: "PHP",
    level: SkillLevel.ACQUAINTED,
    color: "#7175aa",
    icon: faPhp,
  },
].sort((a, b) => (a.level < b.level ? -1 : 1));

export default skillsData;
