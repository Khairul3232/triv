import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionContext } from "../../contexts/QuestionContext";
import { HomePageStyles } from "../HomePage/HomePage.styles";

const ResultPageContainer = ({ children }) => {
  const navigate = useNavigate();
  const { score, resetScoreArray } = useContext(QuestionContext);
  const playAgainText = "Play Again?";
  const finalTotal = score.reduce(
    (previousVal, currentVal) => previousVal + currentVal
  );
  const beginTrivia = (event) => {
    event.preventDefault();
    resetScoreArray();
    navigate("/question/1", { replace: true });
  };

  return (
    <HomePageStyles>
      {children({ finalTotal, playAgainText, beginTrivia })}
    </HomePageStyles>
  );
};

export default ResultPageContainer;
