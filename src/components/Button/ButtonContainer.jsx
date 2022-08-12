import React from "react";
import { ButtonStyle } from "./Button.styles";

const ButtonContainer = ({ children, onClick }) => {
  return <ButtonStyle onClick={onClick}>{children()}</ButtonStyle>;
};

export default ButtonContainer;
