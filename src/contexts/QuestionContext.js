import { createContext } from "react";

export const QuestionContext = createContext({
  url: "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",
  collection: [
    {
      category: "History",
      correct_answer: "True",
      difficulty: "hard",
      incorrect_answers: ["False"],
      question: "Japan was part of the Allied Powers during World War I.",
      type: "boolean"
    }
  ],
  score: [1]
});
