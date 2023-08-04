import { Link } from "react-scroll";

export interface HeaderLinkProps {
  label: string;
  href: string;
}

const HeaderLink = ({ label, href }: HeaderLinkProps) => {
  return (
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
  );
};

export default HeaderLink;
