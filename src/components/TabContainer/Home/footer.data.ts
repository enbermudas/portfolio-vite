import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface FooterElement {
  id: number;
  key?: string;
  title: string;
  link?: string;
}

export interface FooterSocialLink {
  id: number;
  icon: IconDefinition;
  link: string;
}

export const projectsColumns: FooterElement[] = [
  {
    id: 1,
    title: "Types Doodler",
    link: "https://enbermudez.github.io/types-doodler/",
  },
  {
    id: 2,
    title: "Poetry",
    link: "https://enbermudas.github.io/poetry/",
  },
  {
    id: 3,
    title: "Guess me",
    link: "https://enbermudas.github.io/guessme/",
  },
  {
    id: 4,
    title: "Tetris",
    link: "https://enbermudas.github.io/tetris/",
  },
];

export const experienceColumns: FooterElement[] = [
  {
    id: 1,
    key: "kenility",
    title: "Kenility",
  },
  {
    id: 2,
    key: "greenlight",
    title: "Greenlight",
  },
  {
    id: 3,
    key: "mercadolibre",
    title: "MercadoLibre",
  },
  {
    id: 4,
    key: "4rsoluciones",
    title: "4r Soluciones S.R.L.",
  },
  {
    id: 5,
    key: "innova4j",
    title: "Innova4J",
  },
  {
    id: 6,
    key: "proacce",
    title: "Pro-Acce c.a.",
  },
];

export const socialLinks: FooterSocialLink[] = [
  {
    id: 1,
    icon: faGithub,
    link: "https://github.com/enbermudas",
  },
  {
    id: 2,
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/enbermudez/",
  },
  {
    id: 3,
    icon: faWhatsapp,
    link: "https://wa.me/+543426295266",
  },
  {
    id: 4,
    icon: faEnvelope,
    link: "mailto:enrique.bermudez.dev@gmail.com",
  },
];
