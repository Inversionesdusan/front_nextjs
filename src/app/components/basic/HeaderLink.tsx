import Link from "next/link";

export interface HeaderLinkProps {
  label: string;
  href: string;
}

const HeaderLink = ({ label, href }: HeaderLinkProps) => {
  return (
    <Link className="headerLink" href={href}>
      {label}
    </Link>
  );
};

export default HeaderLink;
