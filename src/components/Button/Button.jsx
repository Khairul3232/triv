import React from "react";
import ButtonContainer from "./ButtonContainer";

const Button = ({ text, ...otherProps }) => {
  return <ButtonContainer {...otherProps}>{(_) => text}</ButtonContainer>;
};

export default Button;
