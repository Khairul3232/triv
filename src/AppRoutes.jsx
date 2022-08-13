import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import QuestionsCollection from "./pages/QuestionsCollection/QuestionsCollection";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question/*" element={<QuestionsCollection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
