import React from "react";
import HeaderCategory from "../../components/HeaderCategory/HeaderCategory";
import QuestionPageContainer from "./QuestionPageContainer";

const QuestionPage = ({ data }) => {
  return (
    <React.Fragment>
      <QuestionPageContainer>
        {() => {
          return data && <HeaderCategory category={data.category} />;
        }}
      </QuestionPageContainer>
    </React.Fragment>
  );
};

export default QuestionPage;
