import React from "react";
import Button from "../Button/Button";
import HeaderCustom from "../HeaderCustom/HeaderCustom";
import TextMain from "../TextMain/TextMain";
import TextQuestion from "../TextQuestion/TextQuestion";
import QuestionMainContainer from "./QuestionMain.container";

const QuestionMain = ({ data, index }) => {
  return (
    <QuestionMainContainer data={data} index={index}>
      {({ position, data: { category, question }, button: { yes, no } }) => (
        <React.Fragment>
          <HeaderCustom custom={category} />
          <TextQuestion textBig={question} />
          <TextMain textBig={`${position} of 10`} />
          <Button {...yes} index={index} />
          <Button {...no} index={index} />
        </React.Fragment>
      )}
    </QuestionMainContainer>
  );
};

export default QuestionMain;
