import React from "react";
import { useContext } from "react";
import { Route } from "react-router-dom";
import { QuestionContext } from "../../contexts/QuestionContext";
import HomePage from "../HomePage/HomePage";
import QuestionPage from "../QuestionPage/QuestionPage";
import QuestionsCollectionContainer from "./QuestionsCollection.container";

const QuestionsCollection = () => {
  const { collection } = useContext(QuestionContext);
  return (
    <QuestionsCollectionContainer>
      {({ id }) =>
        collection && [
          collection.map((item, index) => (
            <Route
              key={`${id}_${index}`}
              path={`/${index + 1}`}
              element={<QuestionPage index={index} data={item} />}
            />
          )),
          <Route
            key={`${id}_invalid_path`}
            path={"/*"}
            element={<HomePage />}
          />,
        ]
      }
    </QuestionsCollectionContainer>
  );
};

export default QuestionsCollection;
