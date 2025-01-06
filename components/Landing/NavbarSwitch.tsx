"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";
import { EvilNavbar } from "./evilnavbar";

export const NavbarSwitch = () => {
  const pathname = usePathname();
  const showEvilNavbar = pathname === "/atomaluna";

  return showEvilNavbar ? <EvilNavbar /> : <Navbar />;
};
