import React from "react";
import useDecodeHTMLEntities from "../../hooks/useDecodeHTMLEntities";
import TextMainContainer from "./TextMainContainer";

const TextMain = ({ textBig }) => {
  const decoder = useDecodeHTMLEntities()();
  return <TextMainContainer>{(_) => decoder(textBig)}</TextMainContainer>;
};

export default TextMain;
