import { HomePageStyles } from "./HomePage.styles";
import React from "react";
// import data from "./HomePageData.json";
import { useNavigate } from "react-router-dom";
const HomePageContainer = ({ children }) => {
  const navigate = useNavigate();
  const beginTrivia = (event) => {
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
