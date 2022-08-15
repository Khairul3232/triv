import React from "react";
import styled from "styled-components";

export const BorderedOutline = styled.div`
  border: 1px;
  border-style: solid;
`;

const withBorder = (ComponentToWrap) => (props) => {
  return (
    <BorderedOutline>
      <ComponentToWrap {...props} />
    </BorderedOutline>
  );
};

export default withBorder;
