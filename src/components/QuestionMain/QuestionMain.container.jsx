import React from "react";
import { useContext } from "react";
import { QuestionContext } from "../../contexts/QuestionContext";

const QuestionMainContainer = ({ children, data, index }) => {
  // console.log(data);
  const TRUE = "True";
  const FALSE = "False";
  const { pushScore, score } = useContext(QuestionContext);

  const onTrueFalseButtonClick = (event) => {
    event.preventDefault();
    console.log("button clicked: ", event.target.value);
    const { correct_answer } = data;
    console.log("data: ", data);
    if (correct_answer === event.target.value) {
      pushScore(1);
      console.log(score);
    } else {
      pushScore(0);
    }
  };
  return (
    <React.Fragment>
      {children({
        data,
        button: {
          yes: {
            onClick: onTrueFalseButtonClick,
            text: TRUE,
            value: TRUE,
          },
          no: {
            onClick: onTrueFalseButtonClick,
            text: FALSE,
            value: FALSE,
          },
        },
      })}
    </React.Fragment>
  );
};

export default QuestionMainContainer;
