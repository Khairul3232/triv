import React from "react";
import Header from "../../components/Header/Header";
import HomePageContainer from "./HomePageContainer";

const HomePage = () => {
  return (
    <HomePageContainer>
      {(data) => (
        <React.Fragment>
          <Header />
        </React.Fragment>
      )}
    </HomePageContainer>
  );
};

export default HomePage;
