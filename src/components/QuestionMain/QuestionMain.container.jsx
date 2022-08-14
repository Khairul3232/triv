import React from "react";

const QuestionMainContainer = ({ children, data }) => {
  // console.log(data);
  const TRUE = "True";
  const FALSE = "False";

  const onTrueFalseButtonClick = (event) => {
    event.preventDefault();
    console.log("button clicked: ", event.target.value);
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
