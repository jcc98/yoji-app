import React, { useEffect, useState } from "react"
import yoji5 from "./json/yojis5.json";
import yoji4 from "./json/yojis4.json";
import yoji3 from "./json/yojis3.json";
import yojiJun2 from "./json/yojisjun2.json";
import yoji2 from "./json/yojis2.json";
import yojiJun1 from "./json/yojisjun1.json";
import yoji1 from "./json/yojis1.json";
import "./ShowListYojis.css"
import Spinner from 'react-bootstrap/Spinner'

function ShowListYojis() {

    const [selectedYojiValue, setSelectedYoji] = useState("")
    const [changeYojiValue, setChangeYojiValue] = useState(yoji5)
    const [yojiWords, setYojiWords] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const yojiFunction = async () => {
            try {
                    setYojiWords(changeYojiValue)
                setLoading(true)
                
            } catch (e) {
                console.log(e)
            }
        }
    
        yojiFunction()
    }, [changeYojiValue])

    useEffect(() => {

        switch (selectedYojiValue) {
            
            case "5":
                setChangeYojiValue(yoji5)
                setLoading(false)
                break;
            case "4":
                setChangeYojiValue(yoji4)
                setLoading(false)
                break;
            case "3":
                setChangeYojiValue(yoji3)
                setLoading(false)
                break;
            case "jun2":
                setChangeYojiValue(yojiJun2)
                setLoading(false)
                break;
            case "2":
                setChangeYojiValue(yoji2)
                setLoading(false)
                break;
            case "jun1":
                setChangeYojiValue(yojiJun1)
                setLoading(false)
                break;
            case "1":
                setChangeYojiValue(yoji1)
                setLoading(false)
                break;
            default:
                return null
                
        }
        
    },[selectedYojiValue])


   return(
       <>
        <button value="5" onClick={switchLevels}>Yoji 5</button>
        <button value="4" onClick={switchLevels}>Yoji 4</button>
        <button value="3" onClick={switchLevels}>Yoji 3</button>
        <button value="jun2" onClick={switchLevels}>Yoji Jun 2</button>
        <button value="2" onClick={switchLevels}>Yoji 2</button>
        <button value="jun1" onClick={switchLevels}>Yoji Jun 1</button>
        <button value="1" onClick={switchLevels}>Yoji 1</button>

            <div>
                <h3>Show List</h3>
                <h2>Grade: {changeYojiValue[0].grade}</h2>
            </div>
       
        <ul className="ulStyle">
        {loading ? yojiWords.map((yoji, index) => <li key={index}><h3>{yoji.yomi}</h3><h2>{yoji.word}</h2>  <p>{yoji.def}</p><hr></hr></li>) : <Spinner animation="grow" />}
        </ul>
        
     </>
   ) 

   function switchLevels(e) {
       setSelectedYoji(e.target.value)
   }
}

export default ShowListYojis