import React from "react";
import useQuestions from "../../hooks/useQuestions";
import { HomePageStyles } from "../HomePage/HomePage.styles";

const QuestionPageContainer = ({ children }) => {
  const [data, fetchStatus] = useQuestions();

  const isSuccessfulFetchQuestions = (_) => fetchStatus > 0;

  return (
    <HomePageStyles>
      {isSuccessfulFetchQuestions() && children(data)}
    </HomePageStyles>
  );
};

export default QuestionPageContainer;
