import React from "react";
import useQuestions from "../../hooks/useQuestions";
import { HomePageStyles } from "../HomePage/HomePage.styles";

const QuestionPageContainer = ({ children }) => {
  const data = useQuestions();

  return <HomePageStyles>{children(data)}</HomePageStyles>;
};

export default QuestionPageContainer;
