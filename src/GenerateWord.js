import React, { useState, useRef } from "react";
import "./GenerateWord.css"
import EndGame from "./EndGame.js"

const GenWord = ({hiddenLetter, gradeLevel, randomNumberArray, onChange, filteredWord}) => {


    const [correctAnswers, setCorrectAnswers] = useState([])
    const [wrongAnswers, setWrongAnswers] = useState([])

    let word = gradeLevel[randomNumberArray].word
    let btnRefCorrect = useRef()
    let btnRefWrong = useRef()

    const [toggle, setToggle] = useState(true)

    const [score, setScore] = useState(0)

    const [endToggle, setEndToggle] = useState(true)
  

    const onNewWordClick = () => {
      onChange()
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
            <p>Grade Level: {gradeLevel[randomNumberArray].grade}</p>
            <p>Score: {score}</p>
            <p>{gradeLevel[randomNumberArray].yomi}</p>
            <h1>{toggle ? filteredWord : word}</h1>
            <h3 className="word-definition">{gradeLevel[randomNumberArray].def}</h3>

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