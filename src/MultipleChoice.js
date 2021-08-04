import React, { useState } from "react"
import "./MultipleChoice.css"



function MultipleChoice({hiddenLetter, nonFilteredWord, gradeLevel, randomNumberArray, onChange, filteredWord, filteredLetter}) {

    const [randomReadings, setRandomReadings] = useState([nonFilteredWord[filteredLetter]])
    let score = 0


    fetch(`https://kanjiapi.dev/v1/kanji/${nonFilteredWord[filteredLetter]}`)
    .then(r => r.json())
    .then((data) => {
        fetch(`https://kanjiapi.dev/v1/reading/${data.on_readings[0]}`)
            .then(r => r.json())
            .then((data) => {
                console.log(data.main_kanji)
                if (randomReadings.length < 4) {
                    let word = data.main_kanji[Math.floor(Math.random() * data.main_kanji.length)]
                    setRandomReadings(oldArray => [...oldArray, word])
                }

    });
    })

    return (
        <>            
        <p>Grade Level: {gradeLevel[randomNumberArray].grade}</p>
        <p>Score: {score}</p>
        <p>{gradeLevel[randomNumberArray].yomi}</p>
            <h3>{filteredWord}</h3>
                {randomReadings.map((kanji) => <h1 className="possible-answers">{kanji}</h1>)}
        </>
    );
}

export default MultipleChoice