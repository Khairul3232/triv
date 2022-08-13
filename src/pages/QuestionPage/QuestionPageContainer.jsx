import React from "react";
// import useQuestions from "../../hooks/useQuestions";
import { HomePageStyles } from "../HomePage/HomePage.styles";

const QuestionPageContainer = ({ children }) => {
  return <HomePageStyles>{children()}</HomePageStyles>;
};

export default QuestionPageContainer;
