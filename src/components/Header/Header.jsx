import React from "react";
import HeaderContainer from "./HeaderContainer";

const Header = ({ custom }) => {
  return <HeaderContainer>{(title) => custom || title}</HeaderContainer>;
};

export default Header;
