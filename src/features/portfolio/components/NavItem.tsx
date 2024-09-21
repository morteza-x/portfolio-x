import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const NavItem = ({
  href,
  name,
  active,
}: {
  href: string;
  name: string;
  active: boolean;
}) => {
  return (
    <a
      className={twMerge(
        "nav-item",
        active && "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
      )}
      href={href}
    >
      {name}
    </a>
  );
};

export default NavItem;
