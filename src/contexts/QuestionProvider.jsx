import React from "react";
import useQuestions from "../hooks/useQuestions";
import { QuestionContext } from "./QuestionContext";

const QuestionProvider = ({ children }) => {
  const [collection] = useQuestions();
  const context = {
    url: "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",
    collection: collection ? [...collection.results] : [],
    score: [],
    pushScore: (value) => context.score.push(value),
  };
  return (
    <QuestionContext.Provider value={context}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
