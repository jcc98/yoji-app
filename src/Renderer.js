import React, {useState, useEffect} from "react";
import GenWord from "./GenerateWord";
import yoji5 from "./json/yojis5.json";
import yoji4 from "./json/yojis4.json";
import yoji3 from "./json/yojis3.json";
import yojiJun2 from "./json/yojisjun2.json";
import yoji2 from "./json/yojis2.json";
import yojiJun1 from "./json/yojisjun1.json";
import yoji1 from "./json/yojis1.json";
import yojiAll from "./json/yojiAll.json";
import "./renderer.css";

const Renderer = () => {

    let lettersFiltered = 0
    const [startState, setStartState] = useState(false)
    const [level, setLevel] = useState("yoji5")
    const [difficulty, setDifficulty] = useState("oneChar")
    const [switchImportGrades, setSwitchImportGrades] = useState(yoji5)

    useEffect(() => {
        switch (level) {
            case "yoji5":
                setSwitchImportGrades(yoji5)
                break;
            case "yoji4":
                setSwitchImportGrades(yoji4)
                break;
            
            case "yoji3":
                setSwitchImportGrades(yoji3)
                break;
            
            case "yojiJun2":
                setSwitchImportGrades(yojiJun2)
                break;
            
            case "yoji2":
                setSwitchImportGrades(yoji2)
                break;
            
            case "yojiJun1":
                setSwitchImportGrades(yojiJun1)
                break;
            
            case "yoji1":
                setSwitchImportGrades(yoji1)
                break;

            case "all":
                setSwitchImportGrades(yojiAll)
            
        }

    },[level])

    const modifyStartState = () => {
        if (level === "" || difficulty === "") {
            alert("You need to choose a level and a difficulty.")
        } else {
            if (difficulty === "oneChar") {
                lettersFiltered = 1
                console.log(lettersFiltered)
            } else {
                lettersFiltered = 2
                console.log(lettersFiltered)
            }
            setStartState(!startState)
            }
    }

    const storeLevel = (e) => {
        setLevel(e.target.value)
    }

    const storeDifficulty = (e) => {
        setDifficulty(e.target.value)
    }

    return(
    <>
        <div className={startState && "hideComponent"}>
            <label for="level">Choose level</label>
            <select name="level" id="level" onChange={storeLevel}>
                <option value ="yoji5">５級</option>
                <option value ="yoji4">４級</option>
                <option value ="yoji3">３級</option>
                <option value ="yojiJun2">準２級</option>
                <option value ="yoji2">２級</option>
                <option value ="yojiJun1">準１級</option>
                <option value ="yoji1">１級</option>
                <option value ="all">Mix all</option>
            </select>
    
            <label for ="difficulty">Choose difficulty</label>
            <select name="difficulty" id="difficulty" onChange={storeDifficulty}>
                <option value="oneChar">Hide one character</option>
                <option value="twoChar">Hide two characters (first 2/last 2)</option>
            </select>
            <br></br>
            <button onClick={modifyStartState}>Start</button>
        </div>
        { startState && <GenWord letterFilter ={lettersFiltered} level={switchImportGrades}/> }

    </>
    )
}

export default Renderer;