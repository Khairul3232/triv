import { HomePageStyles } from "./HomePage.styles";
import React from "react";
const HomePageContainer = ({ children }) => {
  const beginTrivia = (event, navigate) => {
    event.preventDefault();
    navigate("/question/1", { replace: true });
  };
  return (
    <HomePageStyles>
      {children({
        onClickBegin: beginTrivia,
        instruction: "You will be presented with 10 True or False questions.",
        prompt: "Can you score 100%?",
        promptButton: "Begin",
      })}
    </HomePageStyles>
  );
};

export default HomePageContainer;
