import React, { useEffect, useState } from "react";

const GenWord = (props) => {

    let randomNumberArray = Math.floor(Math.random() * Object.keys(props.gradeLevel).length)
    const hideRandomSingleLetter = Math.floor(Math.random() * 3)
    let modifiedYoji = props.gradeLevel[randomNumberArray].word.replace(props.gradeLevel[randomNumberArray].word[hideRandomSingleLetter], "O")
    let modifiedDefinition = props.gradeLevel[randomNumberArray].def.replace(props.gradeLevel[randomNumberArray].word[hideRandomSingleLetter], "O")

    // Show unfiltered answer when button clicked

    useEffect(() => {
      
    },[])


    fetch(`https://kanjiapi.dev/v1/kanji/${props.gradeLevel[randomNumberArray].word[hideRandomSingleLetter]}`)
    .then(r => r.json())
    .then((data) => {
        fetch(`https://kanjiapi.dev/v1/reading/${data.on_readings[0]}`)
            .then(r => r.json())
            .then((data) => {
            console.log(data)
    });
    })


    return(
      <div>
            <p>Grade Level: {props.gradeLevel[randomNumberArray].grade}</p>
            <p>{props.gradeLevel[randomNumberArray].yomi}</p>
            <h1>{modifiedYoji} </h1>
            <h3>{modifiedDefinition}</h3>
      <button>
       Show Answer
      </button>

      <button onClick={() => {
        //   setNext(rand = Math.floor(Math.random() * Object.keys(props.gradeLevel).length))
        //   setNext(          randLetter = Math.floor(Math.random() * 3))
        //   setNext(modYoji = props.gradeLevel[rand].word.replace(props.gradeLevel[rand].word[randLetter], "O"))
        //   setNext(modDef = props.gradeLevel[rand].def.replace(props.gradeLevel[rand].word[randLetter], "O"))

      }}>New Word</button>

    </div>

);
}


export default GenWord;