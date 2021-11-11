import React, { useEffect, useState,useContext } from "react";
import { QuizContext } from "../Store/QuizContext";

function MainMenu() {
 const {setStatus,setQuestions,setCategory,setDifficulty} = useContext(QuizContext)
  const submitHandler=(e)=>{
    e.preventDefault();
    
    setStatus('quiz');
  }
  return (
    <div className="container mt-5">
      <div className="card border-0 shadow p-5 w-50 mx-auto">
        <div className="container">
          <h2 style={{ fontWeight: "800" }}>Setup Quiz</h2>
        </div>
        <form action="" className="mt-3" onSubmit={submitHandler}>
          <div className="form-group mt-4">
            <label htmlFor="questions">Number of Questions</label>
            <input
              type="number"
              min="1"
              max="50"
              defaultValue="10"
              className="form-control border-0"
              id="questions"
              onChange={(e)=>setQuestions(e.target.value)}
            />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="category">Category</label>
            <select
              className="form-select"
              aria-label="Default select example"
              id="category"
              onChange={(e)=>setCategory(e.target.value)}
            >
              <option defaultValue="9">General Knowledge</option>
              <option value="10">Books</option>
              <option value="11">films</option>
              <option value="12">Music</option>
              <option value="13">Musicals&Theaters</option>
              <option value="14">Television</option>
              <option value="21">Sports</option>
              <option value="22">Geofraphy</option>
              <option value="23">History</option>
            </select>
          </div>
          <div className="form-group mt-4">
            <label htmlFor="difficulty">Select Difficulty</label>
            <select className="form-select" id="difficulty" onChange={(e)=>setDifficulty(e.target.value)}>
              <option defaultValue="easy">easy</option>
              <option value="medium">meduim</option>
              <option value="hard">hard</option>
            </select>
          </div>
          <div className="container text-center mt-4">
              <button className="btn btn-info">Start</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MainMenu;
