import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionContext } from "../../contexts/QuestionContext";

const QuestionMainContainer = ({ children, data, index }) => {
  // console.log(data);
  const TRUE = "True";
  const FALSE = "False";
  const { pushScore, score } = useContext(QuestionContext);
  const navigate = useNavigate();

  const onTrueFalseButtonClick = (event) => {
    event.preventDefault();
    const { correct_answer } = data;
    console.log("data: ", data);
    if (correct_answer === event.target.value) {
      pushScore(1);
      console.log(score);
    } else {
      pushScore(0);
    }
    const nextPage = parseInt(index) + 2;
    if (nextPage > 10) {
      navigate(`/result`, { replace: true });
    } else if (nextPage > 0) {
      navigate(`/question/${parseInt(index) + 2}`, { replace: true });
    } else {
      return;
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
