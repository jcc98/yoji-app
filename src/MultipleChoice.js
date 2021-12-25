import React, { useState } from "react"
import "./MultipleChoice.css"
import "./hide-component.css"

function MultipleChoice({randomReadings, renderComponent, hiddenLetter, nonFilteredWord, gradeLevel, randomNumberArray, onChange, filteredWord, filteredLetter}) {

    const [render, setRender] = useState(0)
    let nbArray = []

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }

        return array;
    }

    let copyRandomReadings = [...randomReadings]

    const verifyAnswer = (answer) => {
        if (answer === nonFilteredWord[filteredLetter]) {
            setRender(render + 1)
            renderComponent()
            
           
            
        } else {
        }
    }

    return (
        <>            
        <p>Grade Level: {gradeLevel[randomNumberArray].grade}</p>
        <p>Score: </p>
        <p>{gradeLevel[randomNumberArray].yomi}</p>
            <h3>{filteredWord}</h3>
                <div className="hideComponent">
                    {nbArray = randomReadings}
                    {shuffle(nbArray)}
                </div>
                {copyRandomReadings.map((kanji) => <h1 className="possible-answers" onClick={(e) => verifyAnswer(e.target.innerText)}>{kanji}</h1>)}
        </>
    );
}

export default MultipleChoice