import React,{useContext} from 'react';
import MainMenu from './MainMenu';
import Quiz from './Quiz';
import { QuizContext } from '../Store/QuizContext';

function Display() {
    const {status} = useContext(QuizContext);
    console.log(status);
    return (
        <div className="container">

        </div>
    )
}

export default Display
