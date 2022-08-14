import React from "react";
import { HomePageStyles } from "../HomePage/HomePage.styles";

const QuestionPageContainer = ({ children }) => {
  return <HomePageStyles>{children()}</HomePageStyles>;
};

export default QuestionPageContainer;
