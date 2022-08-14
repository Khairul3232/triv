import React from "react";
import Button from "../Button/Button";
import HeaderCategory from "../HeaderCategory/HeaderCategory";
import TextMain from "../TextMain/TextMain";
import QuestionMainContainer from "./QuestionMain.container";

const QuestionMain = ({ data, index }) => {
  return (
    <QuestionMainContainer data={data} index={index}>
      {({ data: { category, question }, button: { yes, no } }) => (
        <React.Fragment>
          <HeaderCategory category={category} />
          <TextMain textBig={question} />
          <Button {...yes} index={index} />
          <Button {...no} index={index} />
        </React.Fragment>
      )}
    </QuestionMainContainer>
  );
};

export default QuestionMain;
