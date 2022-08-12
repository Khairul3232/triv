import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import HomePageContainer from "./HomePageContainer";

const HomePage = () => {
  return (
    <HomePageContainer>
      {(data) => (
        <React.Fragment>
          <Header />
          <Main />
        </React.Fragment>
      )}
    </HomePageContainer>
  );
};

export default HomePage;
