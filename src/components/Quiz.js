import React, { useContext, useState } from "react";
import { QuizContext } from "../Store/QuizContext";
import Modal from "./Modal";

function Quiz() {
  const { list, quizItems } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [correctQuestion, setCorrectQuestion] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    let arr = list[i].incorrect_answers;
    let newArr = [...arr, list[i].correct_answer];
    let result = newArr.map((item, index) => {
      const obj = {};
      obj[`option` + index] = item;

      return obj;
    });
    // result.push({ answer: list[i].correct_answer });
    list[i].answers = result;
  }
  const nextQuestion=()=>{
    if(list.length-1!==currentQuestion){
      setCurrentQuestion(currentQuestion+1);
    }else{
      setIsModalOpen(true);
    }
  }
 
  const CorrectQuestion=(a,b)=>{
    
    if(a===b){
      setCorrectQuestion(correctQuestion+1);  
    }
    if(list.length-1!==currentQuestion){
      setCurrentQuestion(currentQuestion+1);
    }else{
      setIsModalOpen(true);
    }
   
  }
  
  return <>
  {console.log(list.length)}
  {console.log(currentQuestion)}
  {isModalOpen && <Modal correctAnswers={correctQuestion} setIsModalOpen={setIsModalOpen}/>}
  
  <div className='container mt-5'>
    <div className='card border-0 p-5 w-60 mx-auto'>
      <div className="container text-end">
      <p style={{color:'green'}}> No of Questions : {currentQuestion}/{list.length}</p>
      </div>
      <div className='name-container text-center'>
        <h3 style={{fontWeight:'800'}}>{list[currentQuestion].question}</h3>
      </div>
      <div className=" container w-60">
        {list[currentQuestion].answers.map((item,i)=>{
          return <div className="options container text-center mt-3 " id={list[currentQuestion].correct_answer} key={Math.random()}>
            <button className={`btn btn-primary option-btn`}   id={'correct'+i} value={item[`option${i}`]} onClick={(e)=>CorrectQuestion(item[`option${i}`],list[currentQuestion].correct_answer)}>{item[`option${i}`]}</button>
            
          </div>
        })}
      </div>
      <div className="container text-end mt-4">
        <button className="btn btn-warning"style={{fontWeight:'800'}} onClick={nextQuestion}>Next Question</button>
      </div>
    </div>
  </div>
  </>
}

export default Quiz;
