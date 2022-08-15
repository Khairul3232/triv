import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Main from "../../components/TextMain/TextMain";
import HomePageContainer from "./HomePageContainer";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <HomePageContainer>
      {(data) => (
        <React.Fragment>
          <Header />
          <Main textBig={data.instruction} />
          <Main textBig={data.prompt} />
          <Button
            onClick={(ev) => {
              data.onClickBegin(ev, navigate);
            }}
            text={data.promptButton}
          />
        </React.Fragment>
      )}
    </HomePageContainer>
  );
};

export default HomePage;
