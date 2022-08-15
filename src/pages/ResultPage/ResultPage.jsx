import React from "react";
import Button from "../../components/Button/Button";
import HeaderCustom from "../../components/HeaderCustom/HeaderCustom";
import TableResult from "../../components/TableResult/TableResult";
import ResultPageContainer from "./ResultPage.container";

const ResultPage = () => {
  return (
    <ResultPageContainer>
      {(data) => (
        <React.Fragment>
          <HeaderCustom custom={"You scored"} />
          <HeaderCustom custom={`${data.finalTotal} / 10`} />
          <TableResult />
          <Button onClick={data.beginTrivia} text={data.playAgainText} />
        </React.Fragment>
      )}
    </ResultPageContainer>
  );
};

export default ResultPage;
