import React from "react";
import MinusSign from "./MinusSign";
import PlusSign from "./PlusSign";

const IconContainer = ({ children, symbol }) => {
  const determineSymbol = () => {
    if (symbol === 0) {
      return <MinusSign />;
    } else {
      return <PlusSign />;
    }
  };
  return <React.Fragment>{children(determineSymbol)}</React.Fragment>;
};

export default IconContainer;
