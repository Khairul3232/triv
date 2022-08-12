import React from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Main from "../../components/TextMain/TextMain";
import HomePageContainer from "./HomePageContainer";

const HomePage = () => {
  return (
    <HomePageContainer>
      {(data) => {
        const { instruction, prompt, onClickBegin, promptButton } = data;
        return (
          <React.Fragment>
            <Header />
            <Main textBig={instruction} />
            <Main textBig={prompt} />
            <Button onClick={onClickBegin} text={promptButton} />
          </React.Fragment>
        );
      }}
    </HomePageContainer>
  );
};

export default HomePage;
