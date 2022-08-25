import React from "react";
import MinusSign from "./MinusSign";
import PlusSign from "./PlusSign";

const IconContainer = ({ children, symbol }) => {
  const determineSymbol = () => (symbol === 0 ? <MinusSign /> : <PlusSign />);
  return <React.Fragment>{children(determineSymbol)}</React.Fragment>;
};

export default IconContainer;
