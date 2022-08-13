import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import QuestionPage from "../QuestionPage/QuestionPage";
import QuestionsCollectionContainer from "./QuestionsCollection.container";

const QuestionsCollection = () => {
  return (
    <QuestionsCollectionContainer>
      {({ collection, id }) =>
        collection && [
          collection.results.map((item, index) => (
            <Route
              key={`${id}_${index}`}
              path={`/${index + 1}`}
              element={<QuestionPage data={item} />}
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
