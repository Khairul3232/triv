import React from "react";
import QuestionMain from "../../components/QuestionMain/QuestionMain";
import QuestionPageContainer from "./QuestionPageContainer";

const QuestionPage = ({ data, index }) => {
  return (
    <React.Fragment>
      <QuestionPageContainer index={index}>
        {(index) => {
          return <QuestionMain data={data} index={index} />;
        }}
      </QuestionPageContainer>
    </React.Fragment>
  );
};

export default QuestionPage;
