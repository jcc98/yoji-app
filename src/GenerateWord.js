import React, { useEffect, useState } from "react";

const GenWord = (props) => {

  // let randomNumberArray = Math.floor(Math.random() * Object.keys(props.gradeLevel).length)
  // let hideRandomSingleLetter = Math.floor(Math.random() * 3)
  // let hideTwoRandomLetters = Math.floor(Math.random() * 2 + 1)
  // let generatedYoji = props.gradeLevel[randomNumberArray].word
  // let modifiedYoji = generatedYoji.replace(generatedYoji[hideRandomSingleLetter], "O")
  // let modifiedDefinition = props.gradeLevel[randomNumberArray].def.replace(generatedYoji[hideRandomSingleLetter], "O")

    // Show unfiltered answer when button clicked
    // if (hideTwoRandomLetters === 1) {
    //   modifiedYoji = generatedYoji.replace(generatedYoji[0], "O")
    //   modifiedYoji = generatedYoji.replace(generatedYoji[1], "O")
    // } else if (hideTwoRandomLetters === 2) {
    //   modifiedYoji = generatedYoji.replace(generatedYoji[2], "O")
    //   modifiedYoji = generatedYoji.replace(generatedYoji[3], "O")
    // }

    // fetch(`https://kanjiapi.dev/v1/kanji/${generatedYoji[hideRandomSingleLetter]}`)
    // .then(r => r.json())
    // .then((data) => {
    //     fetch(`https://kanjiapi.dev/v1/reading/${data.on_readings[0]}`)
    //         .then(r => r.json())
    //         .then((data) => {
    //         console.log(data)
    // });
    // })

    const [showAnswer, setShowAnswer] = useState(props.modifiedYoji)
    const [newWord, setNewWord] = useState()



    return(
      <div>
            <p>Grade Level: {props.gradeLevel[props.randomNumberArray].grade}</p>
            <p>{props.gradeLevel[props.randomNumberArray].yomi}</p>
            <h1>{showAnswer} </h1>
            <h3>{props.modifiedDefinition}</h3>
      <button onClick={() => {
        // setNext(modifiedYoji = generatedYoji)
        // modifiedDefinition = props.gradeLevel[randomNumberArray].def.replace(generatedYoji[hideRandomSingleLetter], "O")
        setShowAnswer(props.generatedYoji)
      }}>
       Show Answer
      </button>

      <button> 
          {/* // setNext(randomNumberArray = Math.floor(Math.random() * Object.keys(props.gradeLevel).length))
          // setNext(          hideRandomSingleLetter = Math.floor(Math.random() * 3))
          // setNext(modifiedYoji = props.gradeLevel[hideRandomSingleLetter].word.replace(props.gradeLevel[hideRandomSingleLetter].word[hideRandomSingleLetter], "O"))
          // setNext(modifiedDefinition = props.gradeLevel[hideRandomSingleLetter].def.replace(props.gradeLevel[hideRandomSingleLetter].word[hideRandomSingleLetter], "O")) */}

      New Word</button>

    </div>

);
}


export default GenWord;