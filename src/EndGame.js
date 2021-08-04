import React, { useState } from "react";
import KanjiGame from "./KanjiGame"
import "./hide-component.css"

function EndGame({correctAnswers, wrongAnswers, score}) {

    const [retry, setRetry] = useState(false)
 
    return(
        <>
            <div className={retry && "hideComponent"}>
                <h2>Score: {score}</h2>
                <h3>Correct Answers:</h3>
                {correctAnswers.map((val, key) => {
                return <div key={key}><p>{val}</p></div>
                
                })}
                <h3>Wrong Answers:</h3>
                {wrongAnswers.map((val, key) => {
                    return <div key={key}><p>{val}</p></div>
                })}
                <button onClick={() => setRetry(!retry)}>Retry</button>
            </div>
            {retry && <KanjiGame />}
        </>
    );

}

export default EndGame