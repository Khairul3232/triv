import React from "react";
import { HeaderStyles } from "./Header.styles";
import data from "./HeaderData.json";

const HeaderContainer = ({ children }) => {
  return <HeaderStyles>{children(data.title)}</HeaderStyles>;
};

export default HeaderContainer;
