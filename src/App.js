import React, {useContext } from "react";
import './App.css';
import MainMenu from './components/MainMenu';
import QuizContextProvider from './Store/QuizContext';
import Quiz from './components/Quiz';
import { QuizContext } from "./Store/QuizContext";

export default function AppWrapper() {
  // Store, renders the provider, so the context will be accessible from App.
  return (
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  )
}
const  App=()=> {
 const {status} = useContext(QuizContext);
  return (
    <div className="container">
        {status==='menu' &&  <MainMenu/>}
        {status==='quiz' &&  <Quiz/>} 
    </div>
  );
}


