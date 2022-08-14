import React from "react";
import { HomePageStyles } from "../HomePage/HomePage.styles";

const QuestionPageContainer = ({ children, index }) => {
  return <HomePageStyles>{children(index)}</HomePageStyles>;
};

export default QuestionPageContainer;
