import React from "react";
import TextMainContainer from "./TextMainContainer";

const TextMain = ({ textBig }) => {
  return <TextMainContainer>{(_) => textBig}</TextMainContainer>;
};

export default TextMain;
