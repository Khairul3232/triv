import React from "react";
import { ButtonStyle } from "./Button.styles";

const ButtonContainer = ({ children, ...otherProps }) => {
  return <ButtonStyle {...otherProps}>{children()}</ButtonStyle>;
};

export default ButtonContainer;
