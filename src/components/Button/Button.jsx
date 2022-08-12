import React from "react";
import ButtonContainer from "./ButtonContainer";

const Button = ({ onClick, text }) => {
  return <ButtonContainer onClick={onClick}>{(_) => text}</ButtonContainer>;
};

export default Button;
