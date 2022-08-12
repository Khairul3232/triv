import React from "react";

const withCategory =
  (ComponentToWrap) =>
  ({ category }) => {
    return category && <ComponentToWrap category={category} />;
  };

export default withCategory;
