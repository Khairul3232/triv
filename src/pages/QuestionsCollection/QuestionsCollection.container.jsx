import React from "react";
import { useId } from "react";
import { Routes } from "react-router-dom";
import { HomePageStyles } from "../HomePage/HomePage.styles";

const QuestionsCollectionContainer = ({ children }) => {
  const id = useId();
  return (
    <HomePageStyles>
      <Routes>{children({ id })}</Routes>
    </HomePageStyles>
  );
};

export default QuestionsCollectionContainer;
