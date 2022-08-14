import React from "react";
import QuestionMain from "../../components/QuestionMain/QuestionMain";
import QuestionPageContainer from "./QuestionPageContainer";

const QuestionPage = ({ data }) => {
  return (
    <React.Fragment>
      <QuestionPageContainer>
        {() => {
          return <QuestionMain data={data} />;
        }}
      </QuestionPageContainer>
    </React.Fragment>
  );
};

export default QuestionPage;
