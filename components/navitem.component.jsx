import React from "react";
import Link from "next/link";

const NavItem = ({ title, href }) => {
  return (
    <Link href={`#${href}`}>
      <a className="font-semibold">{title}</a>
    </Link>
  );
};
export default NavItem;
