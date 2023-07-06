import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { experienceColumns, projectsColumns, socialLinks } from "./footer.data";
import type { FooterElement, FooterSocialLink as SocialLinkType } from "./footer.data";

interface FooterColumnProps {
  title: string;
  elements: FooterElement[];
  isButton?: boolean;
}

interface FooterSocialLinkProps {
  link: SocialLinkType;
}

const FooterSocialLink = ({ link: { link, icon } }: FooterSocialLinkProps) => {
  return (
    <a href={link} target="_blank">
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
          elements.map(({ id, title, link, key }) => {
            return (
              <li key={id} className="mb-3">
                {isButton ? (
                  <button className={classes} onClick={() => console.log(id)}>
                    {title}
                  </button>
                ) : (
                  <a href={link} target="_blank" className={classes}>
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
  return (
    <nav className="w-full min-h-fit p-6 flex mt-6">
      <div className="flex-grow flex">
        {<FooterColumn title="Experiencia" elements={experienceColumns} isButton />}
        {<FooterColumn title="Proyectos" elements={projectsColumns} />}
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
