import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface FooterSocialLink {
  id: number;
  icon: IconDefinition;
  link: string;
}

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
