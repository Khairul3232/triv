import React from "react";
import HeaderCategory from "../../components/HeaderCategory/HeaderCategory";
import QuestionPageContainer from "./QuestionPageContainer";

const QuestionPage = () => {
  return (
    <React.Fragment>
      <QuestionPageContainer>
        {(data) => {
          return data && <HeaderCategory category={data.results[0].category} />;
        }}
      </QuestionPageContainer>
    </React.Fragment>
  );
};

export default QuestionPage;
