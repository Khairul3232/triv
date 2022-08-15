import React from "react";
import IconContainer from "./Icon.container";

const Icon = ({ symbol }) => {
  return (
    <IconContainer symbol={symbol}>
      {(icon) => <React.Fragment>{icon()}</React.Fragment>}
    </IconContainer>
  );
};

export default Icon;
