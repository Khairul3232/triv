import { HomePageStyles } from "./HomePage.styles";
import React from "react";
import data from "./HomePageData.json";
const HomePageContainer = ({ children }) => {
  return <HomePageStyles>{children(data)}</HomePageStyles>;
};

export default HomePageContainer;
