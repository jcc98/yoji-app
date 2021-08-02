import React from "react"
import { useState } from "react"
import Renderer from "./Renderer"
import "./KanjiGame.css"
import "./hide-component.css"

function KanjiGame() {
    const [toggle, setToggle] = useState(false)
    return(
        <>
            <div className={toggle && "hideComponent"}>
                <h3>Kanji Game</h3>
                <div className="container" onClick={() => setToggle(!toggle)}>
                    <h2>Self-assessment mode</h2>
                    <p>Judge by yourself whether you got it right or not.</p>
                </div>
                <div className="container">
                    <h2>Multiple-choice mode</h2>
                    <p>Select the correct reading for the designated yoji.</p>
                </div>
            </div>
                {toggle && <Renderer />}
        </>
        
    )
}

export default KanjiGame