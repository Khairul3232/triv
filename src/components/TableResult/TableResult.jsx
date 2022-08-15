import React from "react";
import useDecodeHTMLEntities from "../../hooks/useDecodeHTMLEntities";
import Icon from "../IconContainer/Icon";
import TableResultContainer from "./TableResult.container";
import { TableStyles, TDataStyles, TRowStyles } from "./TableResult.styles";

const TableResult = ({}) => {
  const decodeToHtml = useDecodeHTMLEntities()();
  return (
    <TableResultContainer>
      {(data) => (
        <tbody>
          {data.IconSigns.map((icon, index) => (
            <TRowStyles key={index}>
              <TDataStyles>{icon}</TDataStyles>
              <TDataStyles>
                {decodeToHtml(data.collection[index].question)}
              </TDataStyles>
            </TRowStyles>
          ))}
        </tbody>
      )}
    </TableResultContainer>
  );
};

export default TableResult;
