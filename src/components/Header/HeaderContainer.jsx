import React from "react";
import { HeaderStyles } from "./Header.styles";

const HeaderContainer = ({ children }) => {
  const title = "Welcome to the Trivia Challenge!";
  return <HeaderStyles>{children(title)}</HeaderStyles>;
};

export default HeaderContainer;
