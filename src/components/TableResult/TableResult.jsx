import React from "react";
import useDecodeHTMLEntities from "../../hooks/useDecodeHTMLEntities";
import TableResultContainer from "./TableResult.container";
import { TDataStyles, TRowStyles } from "./TableResult.styles";

const TableResult = () => {
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
