import React, { useEffect, useState } from 'react'

export default function QuestionTimer({timeout, onTimeOut,mode}) {
  const[remainingtime, setRemainingTime] = useState(timeout);
    
  useEffect(()=>{
    const timer = setTimeout(onTimeOut,timeout);
    return()=>{
        clearInterval(timer);
    };
  },[timeout,onTimeOut]);
  
  useEffect(()=>{
   const interval = setInterval(()=>{
          setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    },100);
    return()=>{
        clearInterval(interval);
    };
  },[]);

      return (
    <progress
     max={timeout}
     value={remainingtime} 
     className={mode}
     />
  )
}
