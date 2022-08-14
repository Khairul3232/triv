import React from "react";
import Button from "../Button/Button";
import HeaderCategory from "../HeaderCategory/HeaderCategory";
import TextMain from "../TextMain/TextMain";
import QuestionMainContainer from "./QuestionMain.container";

const QuestionMain = ({ data }) => {
  return (
    <QuestionMainContainer data={data}>
      {({ data: { category, question }, button: { yes, no } }) => (
        <React.Fragment>
          <HeaderCategory category={category} />
          <TextMain textBig={question} />
          <Button {...yes} />
          <Button {...no} />
        </React.Fragment>
      )}
    </QuestionMainContainer>
  );
};

export default QuestionMain;
