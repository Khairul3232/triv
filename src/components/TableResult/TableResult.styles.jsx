import styled from "styled-components";

export const OuterResultStyles = styled.div`
  overflow-x: auto;
`;

export const TableStyles = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TRowStyles = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TDataStyles = styled.td`
  text-align: left;
  padding: 8px;
`;
