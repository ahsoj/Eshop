"use client";

import React from "react";
import NavBar from "./Nav";
import { usePathname } from "next/navigation";

type HeaderProps = {};

const Header: React.FC<{ props?: HeaderProps }> = ({ ...props }) => {
  const pathname = usePathname();

  return (
    <>
      {!pathname.startsWith("/admin") && (
        <header>
          <NavBar />
        </header>
      )}
    </>
  );
};

export default Header;
