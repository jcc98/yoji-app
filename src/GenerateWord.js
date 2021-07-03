import React, { useEffect, useState } from "react";

const GenWord = (props) => {

    let rand = Math.floor(Math.random() * Object.keys(props.level).length)
    let randLetter = Math.floor(Math.random() * 3)
    let modYoji = props.level[rand].word.replace(props.level[rand].word[randLetter], "O")
    let modDef = props.level[rand].def.replace(props.level[rand].word[randLetter], "O")

    const [toggleYoji, setToggleYoji] = useState(false)
    // const [toggleDef, setToggleDef] = useState(false)


    const toggleState = () => {
      setToggleYoji(!setToggleYoji)
      // setToggleDef(!setToggleDef)
    }

    fetch(`https://kanjiapi.dev/v1/kanji/${props.level[rand].word[randLetter]}`)
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

            <p>Grade level: {props.level[rand].grade}</p>
            <p>{props.level[rand].yomi}</p>
            <h1>{modYoji} </h1>
            <h3>{modDef}</h3>

      <button onClick={(toggleState)}>
       Show Answer
      </button>

      <button onClick={() => {
        //   setNext(rand = Math.floor(Math.random() * Object.keys(props.level).length))
        //   setNext(          randLetter = Math.floor(Math.random() * 3))
        //   setNext(modYoji = props.level[rand].word.replace(props.level[rand].word[randLetter], "O"))
        //   setNext(modDef = props.level[rand].def.replace(props.level[rand].word[randLetter], "O"))

      }}>New Word</button>

    </div>

);
}


export default GenWord;