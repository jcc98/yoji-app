import React from "react";
import SimpleModal from "./Modal";

function EndGame({correctAnswers, wrongAnswers, score}) {
 
    return(
        <>
            <h2>Score: {score}</h2>
            <h3>Correct Answers:</h3>
            {correctAnswers.map((val, key) => {
            return <div key={key}><p>{val}</p></div>
            
            })}
            <h3>Wrong Answers:</h3>
            {wrongAnswers.map((val, key) => {
                return <div key={key}><p>{val}</p></div>
            })}
            
        </>
    );

}

export default EndGame