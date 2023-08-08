import { Link } from "react-scroll";
import LinkNext from "next/link";

export interface HeaderLinkProps {
  label: string;
  href: string;
  landing: boolean;
}

const HeaderLink = ({ label, href, landing }: HeaderLinkProps) => {
  return landing ? (
    <Link
      className="headerLink"
      activeClass="active-option-header"
      to={href}
      spy={true}
      smooth={true}
      offset={0}
      duration={600}
    >
      {label}
    </Link>
  ) : (
    <LinkNext href={`/#${href}`} className="headerLink">
      {label}
    </LinkNext>
  );
};

export default HeaderLink;
