import Link from "next/link";
import React from "react";

export interface HeaderLinkProps {
  label: string;
  href: string;
}

const HeaderLink = ({ label, href }: HeaderLinkProps) => {
  return (
    <Link
      style={{
        fontFamily: "Nunito",
        fontWeight: "400",
        color: "rgb(56,59,64)",
        background: "rgba( 0, 0, 0, 0.1 )",
        boxShadow: "5px 5px 8px -4px rgba(0,0,0,0.47)",
        backdropFilter: "blur( 7.5px )",
        borderRadius: "20px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        width: "130px",
        textAlign: "center",
        padding: "0.25rem",
      }}
      href={href}
    >
      {label}
    </Link>
  );
};

export default HeaderLink;
