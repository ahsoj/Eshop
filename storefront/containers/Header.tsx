import React from "react";
import NavBar from "./Nav";

type HeaderProps = {};

const Header: React.FC<{ props?: HeaderProps;}> = ({
  ...props
}) => {
  return (
  <header>
    <NavBar />
  </header>
  );
};

export default Header;
