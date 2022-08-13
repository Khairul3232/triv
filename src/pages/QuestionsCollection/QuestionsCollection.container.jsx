import React from "react";
import { useId } from "react";
import { Routes } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import { HomePageStyles } from "../HomePage/HomePage.styles";

const QuestionsCollectionContainer = ({ children }) => {
  const [collection, fetchStatus] = useQuestions();
  const id = useId();
  const isSuccessfulFetchQuestions = (_) => fetchStatus > 0;

  return (
    <HomePageStyles>
      <Routes>
        {isSuccessfulFetchQuestions() && children({ collection, id })}
      </Routes>
    </HomePageStyles>
  );
};

export default QuestionsCollectionContainer;
