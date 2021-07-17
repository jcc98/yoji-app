import React, { useEffect, useState } from "react";

const GenWord = (props) => {

    // fetch(`https://kanjiapi.dev/v1/kanji/${generatedYoji[hideRandomSingleLetter]}`)
    // .then(r => r.json())
    // .then((data) => {
    //     fetch(`https://kanjiapi.dev/v1/reading/${data.on_readings[0]}`)
    //         .then(r => r.json())
    //         .then((data) => {
    //         console.log(data)
    // });
    // })

    let word = props.gradeLevel[props.randomNumberArray].word

    const [toggle, setToggle] = useState(true)
    
    const toggleHidden = () => {
      setToggle(!toggle)
    }

    const onNewWordClick = () => {
      props.onChange()
      setToggle(true)
    }
    
    return(
      <div>
        <p>Grade Level: {props.gradeLevel[props.randomNumberArray].grade}</p>
        <p>{props.gradeLevel[props.randomNumberArray].yomi}</p>
        <h1>{toggle ? props.filteredWord : word}</h1>
        <h3>{props.gradeLevel[props.randomNumberArray].def}</h3>

        <button onClick={toggleHidden}>Show Answer</button>
        <button onClick={onNewWordClick}>New Word</button>
      </div>

);
}


export default GenWord;