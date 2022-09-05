import React from "react";
import Link from "next/link";

const NavItem = ({ title, href }) => {
  return (
    <Link href={`#${href}`}>
      <a className="font-semibold nav-item duration-500 hover:text-red-500 hover:-translate-y-1">
        {title}
      </a>
    </Link>
  );
};
export default NavItem;
