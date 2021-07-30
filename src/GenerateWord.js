import React, { useState, useRef } from "react";
import "./GenerateWord.css"
import EndGame from "./EndGame.js"

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
    const [correctAnswers, setCorrectAnswers] = useState([])
    const [wrongAnswers, setWrongAnswers] = useState([])

    let word = props.gradeLevel[props.randomNumberArray].word
    let btnRefCorrect = useRef()
    let btnRefWrong = useRef()

    const [toggle, setToggle] = useState(true)

    const [score, setScore] = useState(0)

    const [endToggle, setEndToggle] = useState(true)
  

    const onNewWordClick = () => {
      props.onChange()
      setToggle(true)
    }
    
    const inc = () => {
      setScore(score + 1)
      btnRefCorrect.current.setAttribute("disabled", "disabled")
      btnRefWrong.current.removeAttribute("disabled")
      setCorrectAnswers(oldArray => [...oldArray, word])
      onNewWordClick()
      
    }

    const dec = () => {
      setScore(score - 1)
      btnRefWrong.current.setAttribute("disabled", "disabled")
      btnRefCorrect.current.removeAttribute("disabled")
      setWrongAnswers(oldArray => [...oldArray, word])
      onNewWordClick()

    }

    return(
      <div>
        { endToggle &&
          <div>
            <p>Grade Level: {props.gradeLevel[props.randomNumberArray].grade}</p>
            <p>Score: {score}</p>
            <p>{props.gradeLevel[props.randomNumberArray].yomi}</p>
            <h1>{toggle ? props.filteredWord : word}</h1>
            <h3 className="word-definition">{props.gradeLevel[props.randomNumberArray].def}</h3>

            <button onClick={() => setToggle(!toggle)}>Toggle Answer</button>
            
            {endToggle && <button onClick={() => setEndToggle(!endToggle)}>End</button>}
            <br></br>
            {!toggle && <button ref={btnRefCorrect} className="correct" onClick={inc}>Correct</button>
            }
            {!toggle && <button ref={btnRefWrong} className="wrong" onClick={dec}>Wrong</button>}
          </div>
        }
        {!endToggle && <EndGame score={score} wrongAnswers={wrongAnswers} correctAnswers={correctAnswers}/>}
      </div>

);
}


export default GenWord;