import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import QuestionsCollection from "./pages/QuestionsCollection/QuestionsCollection";
import ResultPage from "./pages/ResultPage/ResultPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question/*" element={<QuestionsCollection />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
