import React, { useContext } from "react";
import { QuestionContext } from "../../contexts/QuestionContext";
import Icon from "../IconContainer/Icon";
import { OuterResultStyles, TableStyles } from "./TableResult.styles";

const TableResultContainer = ({ children }) => {
  const { score, collection } = useContext(QuestionContext);
  const IconSigns = score.map((item, index) => (
    <Icon key={index} symbol={item} />
  ));
  return (
    <OuterResultStyles>
      <TableStyles>{children({ score, IconSigns, collection })}</TableStyles>
    </OuterResultStyles>
  );
};

export default TableResultContainer;
