import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

import experienceData from "../Home/Experience/experience.data";
import type { ExperienceData } from "../Home/Experience/experience.data";
import { projectsColumns, socialLinks } from "./footer.data";
import type { FooterElement, FooterSocialLink as SocialLinkType } from "./footer.data";

interface FooterColumnProps {
  title: string;
  elements: FooterElement[] | ExperienceData[];
  isButton?: boolean;
}

interface FooterSocialLinkProps {
  link: SocialLinkType;
}

const FooterSocialLink = ({ link: { link, icon } }: FooterSocialLinkProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <FontAwesomeIcon
        icon={icon}
        className="p-2 bg-background-social hover:bg-background-profile text-xl rounded-full cursor-pointer transition ease-in-out"
      />
    </a>
  );
};

const FooterColumn = ({ title, elements, isButton = false }: FooterColumnProps) => {
  const classes = "text-text-subdued hover:underline hover:text-text-base underline-offset-4";

  return (
    <div className="w-64">
      <p className="mb-6 font-black">{title}</p>
      <ul>
        {!!elements.length &&
          elements.map(({ id, title, link }) => {
            return (
              <li key={id} className="mb-3">
                {isButton ? (
                  <button className={classes} onClick={() => console.log(id)}>
                    {title}
                  </button>
                ) : (
                  <a href={link} target="_blank" className={classes} rel="noreferrer">
                    {title}
                  </a>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

const Footer = () => {
  const { t } = useTranslation();

  return (
    <nav className="w-full min-h-fit p-6 flex mt-6 border-solid border-t border-background-section justify-center">
      <div className="flex-grow md:flex md:visible hidden invisible">
        {<FooterColumn title={t("section.experience")} elements={experienceData} isButton />}
        {<FooterColumn title={t("section.projects")} elements={projectsColumns} />}
      </div>

      <div className="flex-none flex justify-center gap-2 h-fit">
        {!!socialLinks.length &&
          socialLinks.map((link) => {
            return <FooterSocialLink link={link} key={link.id} />;
          })}
      </div>
    </nav>
  );
};

export default Footer;
