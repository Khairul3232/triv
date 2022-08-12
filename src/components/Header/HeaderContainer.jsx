import React from "react";
import { HeaderStyles } from "./Header.styles";
import { title } from "./HeaderData.json";

const HeaderContainer = ({ children }) => {
  return <HeaderStyles>{children(title)}</HeaderStyles>;
};

export default HeaderContainer;
