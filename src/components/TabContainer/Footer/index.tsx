import { socialLinks } from "@/data/footer.data";
import type { FooterSocialLink as SocialLinkType } from "@/data/footer.data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const Footer = () => {
  return (
    <nav
      data-testid="footer"
      className="w-full min-h-fit p-6 flex mt-6 border-solid border-t border-background-section justify-center"
    >
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
