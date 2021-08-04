import React from "react"



function MultipleChoice({hiddenLetter, gradeLevel, randomNumberArray, onChange, filteredWord}) {

    fetch(`https://kanjiapi.dev/v1/kanji/${filteredWord[randomNumberArray]}`)
    .then(r => r.json())
    .then((data) => {
        fetch(`https://kanjiapi.dev/v1/reading/${data.on_readings[0]}`)
            .then(r => r.json())
            .then((data) => {
            console.log(data)
    });
    })

    return (
        <>WIP</>
    );
}

export default MultipleChoice