import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header
      className="
    fixed top-3 left-0 right-0 z-10
    "
    >
      <nav className="flex items-center gap-1 flex-wrap p-0.5 border border-white/15 rounded-full w-fit mx-auto bg-white/10 backdrop-blur">
        {navItems.map((item) => (
          <NavItem key={item.name} {...item} />
        ))}
      </nav>
    </header>
  );
};

const navItems = [
  { name: "Home", href: "#hero", active: false },
  { name: "Projects", href: "#projects", active: false },
  { name: "About", href: "#about", active: false },
  { name: "Contact", href: "#contact", active: true },
];

export default Header;
