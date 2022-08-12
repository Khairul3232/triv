import React from "react";
import { MainStyles } from "./TextMain.styles";

const TextMainContainer = ({ children }) => {
  return <MainStyles>{children()}</MainStyles>;
};

export default TextMainContainer;
