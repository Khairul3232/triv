import React from "react";

const withCategory = (ComponentToWrap) => (props) => {
  const { category } = props;
  return category && <ComponentToWrap {...props} />;
};

export default withCategory;
