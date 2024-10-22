import { useCallback, useState} from "react";
import QUESTIONS from '../questions.js';
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
 
    const [userAnswers, setUserAnswers] = useState([]);
   

    const activeQuestionIndex = userAnswers.length;   
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(
      function handleClickAnswer(selectedAnswer){
           setUserAnswers((prevUserAnswer)=>{
            return [...prevUserAnswer, selectedAnswer];
           });
     },
     []);
       
      const handleSkipAnswer = useCallback(
        ()=>handleSelectAnswer(null),
        [handleSelectAnswer]
      );

       if(quizIsComplete){
        return <Summary userAnswers ={userAnswers}/>
       }

    return (
    <div className="main">
        <Question 
        key={activeQuestionIndex}
        index={activeQuestionIndex}
         onSelectAnswer={handleSelectAnswer}
         onSkipAnswer={handleSkipAnswer}
         />
    </div>
)}
