import React, { useState, useEffect } from "react"
import "./MultipleChoice.css"
import "./hide-component.css"
import KanjiGame from "./KanjiGame"



function MultipleChoice({renderComponent, hiddenLetter, nonFilteredWord, gradeLevel, randomNumberArray, onChange, filteredWord, filteredLetter}) {

    const [randomReadings, setRandomReadings] = useState([nonFilteredWord[filteredLetter]])
    const [render, setRender] = useState(0)

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }

        return array;
    }
    let nbArray = []


    fetch(`https://kanjiapi.dev/v1/kanji/${nonFilteredWord[filteredLetter]}`)
    .then(r => r.json())
    .then((data) => {
        fetch(`https://kanjiapi.dev/v1/reading/${data.on_readings[0]}`)
            .then(r => r.json())
            .then((data) => {
                if (randomReadings.length < 4) {
                    let word = data.main_kanji[Math.floor(Math.random() * data.main_kanji.length)]
                    setRandomReadings(oldArray => [...oldArray, word])
                }            
    });
    })

    const verifyAnswer = (answer) => {
        if (answer === nonFilteredWord[filteredLetter]) {
            renderComponent()
            setRender(render + 1)
            
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
                {randomReadings.map((kanji) => <h1 className="possible-answers" onClick={(e) => verifyAnswer(e.target.innerText)}>{kanji}</h1>)}
        </>
    );
}

export default MultipleChoice