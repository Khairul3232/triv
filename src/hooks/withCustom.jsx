import React from "react";

const withCustom = (ComponentToWrap) => (props) => {
  const { custom } = props;
  return custom && <ComponentToWrap {...props} />;
};

export default withCustom;
