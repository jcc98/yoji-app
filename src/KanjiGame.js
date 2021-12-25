import React from "react"
import { useState, useEffect } from "react"
import "./KanjiGame.css"
import "./hide-component.css"
import MultipleChoice from "./MultipleChoice"
import GenWord from "./GenerateWord";
import yoji5 from "./json/yojis5.json";
import yoji4 from "./json/yojis4.json";
import yoji3 from "./json/yojis3.json";
import yojiJun2 from "./json/yojisjun2.json";
import yoji2 from "./json/yojis2.json";
import yojiJun1 from "./json/yojisjun1.json";
import yoji1 from "./json/yojis1.json";
import yojiAll from "./json/yojiAll.json";


function KanjiGame() {
    const [mode, setMode] = useState()
    // new 
    const renderComponent = () => {
        setRandomNumberArray(genRandWord)
        
        setUnfilteredWord(switchImportGrades[randomNumberArray].word)
        setSingleLetterRandom(Math.floor(Math.random() * 4))
    
    }
    const [startState, setStartState] = useState(false)
    const [level, setLevel] = useState("yoji5")
    const [difficulty, setDifficulty] = useState("oneChar")
    const [switchImportGrades, setSwitchImportGrades] = useState(yoji5)
    let genRandWord = Math.floor(Math.random() * Object.keys(switchImportGrades).length)
    const [randomNumberArray, setRandomNumberArray] = useState(genRandWord)
    const [modifyState, setModifyState] = useState(false)
    let word = switchImportGrades[randomNumberArray].word
    const [unfilteredWord, setUnfilteredWord] = useState(switchImportGrades[randomNumberArray].word)
    const [singleLetterRandom, setSingleLetterRandom] = useState(Math.floor(Math.random() * 4))
    const [randomReadings, setRandomReadings] = useState([unfilteredWord[singleLetterRandom]])

    fetch(`https://kanjiapi.dev/v1/kanji/${unfilteredWord[singleLetterRandom]}`)
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


        if (difficulty === "oneChar") {
            word = word.replace(word[singleLetterRandom], "O")
        } else {
            const frontOrBack = Math.floor(Math.random() * 2)
            if (frontOrBack === 0 ) {
                word = word.replace(word[0], "O")
                word = word.replace(word[1], "O")
            } else {
                word = word.replace(word[2], "O")
                word = word.replace(word[3], "O")
            }
        }

    useEffect(() => {
        setRandomNumberArray(genRandWord)
    },[modifyState])

    const changeVal = () => {
        setModifyState(!modifyState)
    }
    const updateGenRandWord = () => genRandWord = Math.floor(Math.random() * Object.keys(switchImportGrades.length)) 

  
    useEffect(() => {
        switch (level) {
            case "yoji5":
                setSwitchImportGrades(yoji5)
                updateGenRandWord()

                break;
            case "yoji4":
                setSwitchImportGrades(yoji4)
                updateGenRandWord()

                break;
            
            case "yoji3":
                setSwitchImportGrades(yoji3)
                updateGenRandWord()

                break;
            
            case "yojiJun2":
                setSwitchImportGrades(yojiJun2)
                updateGenRandWord()

                break;
            
            case "yoji2":
                setSwitchImportGrades(yoji2)
                updateGenRandWord()

                break;
            
            case "yojiJun1":
                setSwitchImportGrades(yojiJun1)
                updateGenRandWord()

                break;
            
            case "yoji1":
                setSwitchImportGrades(yoji1)
                updateGenRandWord()

                break;

            case "all":
                setSwitchImportGrades(yojiAll)    
                updateGenRandWord()
                break;
            default:
                setSwitchImportGrades(yoji5)
                updateGenRandWord()
        
        }

    },[level])

    const modifyStartState = () => {
        if (level === "" || difficulty === "") {
            if (mode !== 0 || mode !== 1) {
            alert("You need to choose a level and a difficulty.")
            }
        } else {
            setStartState(!startState)
                }
            
            }
    return(
        <div className="container container-gradient">
            <div className={startState && "hideComponent"}>
                <h3>Kanji Game</h3>
                <div className="container container-bg" onClick={() => setMode(1)}>
                    <h2>Self-assessment mode</h2>
                    <p>Judge by yourself whether you got it right or not.</p>
                </div>
                <div className="container container-bg" onClick={() => setMode(2)}>
                    <h2>Multiple-choice mode</h2>
                    <p>Select the correct reading for the designated yoji.</p>
                </div>
                <p>Selected: {mode === 1 ? "Self-assessment" : (mode === 2 ? "Multiple-choice" : "None")}</p>
            </div>
            {/* new */}
            <div className={startState && "hideComponent"}>
            <label for="level">Choose level</label>
            <select name="level" id="level" onChange={(e) => setLevel(e.target.value)}>
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
            <select name="difficulty" id="difficulty" onChange={(e) => setDifficulty(e.target.value)}>
                <option value="oneChar">Hide one character</option>
                <option value="twoChar">Hide two characters (first 2/last 2)</option>
            </select>
            <br></br>
            <button onClick={modifyStartState}>Start</button>
        </div>
        { startState && mode === 1 && <GenWord hiddenLetter={difficulty} gradeLevel={switchImportGrades} randomNumberArray={randomNumberArray} onChange={changeVal} filteredWord={word}/>}
        { startState && mode === 2 && <MultipleChoice renderComponent={renderComponent} randomReadings={randomReadings} hiddenLetter={difficulty} gradeLevel={switchImportGrades} randomNumberArray={randomNumberArray} onChange={changeVal} filteredWord={word} nonFilteredWord={unfilteredWord} filteredLetter={singleLetterRandom}/>}
        </div>
        
    )
}

export default KanjiGame