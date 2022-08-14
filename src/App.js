// import logo from './logo.svg';
import './App.css';
import AppRoutes from './AppRoutes';
import React from 'react';
import QuestionProvider from './contexts/QuestionProvider';

function App() {
  return <QuestionProvider><AppRoutes /></QuestionProvider>;
}

export default App;
