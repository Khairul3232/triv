import React from "react";
import ButtonContainer from "./Button.container";

const Button = ({ text, ...otherProps }) => {
  return <ButtonContainer {...otherProps}>{(_) => text}</ButtonContainer>;
};

export default Button;
