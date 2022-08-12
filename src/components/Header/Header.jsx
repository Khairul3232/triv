import React from "react";
import HeaderContainer from "./HeaderContainer";

const Header = ({ category }) => {
  return <HeaderContainer>{(title) => category || title}</HeaderContainer>;
};

export default Header;
