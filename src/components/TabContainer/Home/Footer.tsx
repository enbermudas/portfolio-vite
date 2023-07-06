import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { experienceColumns, projectsColumns } from "./footer.data";
import type { FooterElement } from "./footer.data";

interface FooterColumnProps {
  title: string;
  elements: FooterElement[];
}

const FooterColumn = ({ title, elements }: FooterColumnProps) => {
  return (
    <div className="w-64">
      <p className="mb-6 font-black">{title}</p>
      <ul>
        {!!elements.length &&
          elements.map(({ id, title }) => {
            return (
              <li key={id} className="mb-3">
                <button className="text-text-subdued hover:underline hover:text-text-base underline-offset-4">
                  {title}
                </button>
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
        {<FooterColumn title="Experiencia" elements={experienceColumns} />}
        {<FooterColumn title="Proyectos" elements={projectsColumns} />}
      </div>

      <div className="flex-none flex justify-center gap-2">
        <FontAwesomeIcon
          icon={faGithub}
          className="p-2 bg-background-social hover:bg-background-profile text-xl rounded-full cursor-pointer transition ease-in-out"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="p-2 bg-background-social hover:bg-background-profile text-xl rounded-full cursor-pointer transition ease-in-out"
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          className="p-2 bg-background-social hover:bg-background-profile text-xl rounded-full cursor-pointer transition ease-in-out"
        />
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="p-2 bg-background-social hover:bg-background-profile text-xl rounded-full cursor-pointer transition ease-in-out"
        />
      </div>
    </nav>
  );
};

export default Footer;
