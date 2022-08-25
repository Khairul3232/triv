import React from "react";
import HeaderContainer from "./Header.container";

const Header = ({ custom }) => {
  return <HeaderContainer>{(title) => custom || title}</HeaderContainer>;
};

export default Header;
