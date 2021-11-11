import { createContext,useState,useEffect } from 'react';

export const QuizContext=createContext();

const QuizContextProvider=(props)=>{
    const [waiting, setWaiting] = useState(true);
    const [status, setStatus] = useState('menu');
    const [questions, setQuestions] = useState(10);
    const [category, setCategory] = useState(0);
    const [difficulty, setDifficulty] = useState('easy');
    const [quizItems, setQuizItems] = useState([]);
    const [list, setList] = useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(
            `https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}`
          );
          const data = await response.json();
          setList(data.results);  
        };
        fetchData();
      console.log(list.results);
      }, [questions, category, difficulty]);

       const contextValue={
        status,
        setStatus,questions, setQuestions,category, setCategory,difficulty, setDifficulty,
        list,quizItems, setQuizItems,
    }

   
      
    return <QuizContext.Provider value={contextValue}>
        {props.children}
    </QuizContext.Provider>
}

export default QuizContextProvider;
