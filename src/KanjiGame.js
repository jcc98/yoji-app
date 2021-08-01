import React from "react"
import "./KanjiGame.css"

function KanjiGame() {
    return(
        <>
            <h3>Kanji Game</h3>
            <div className="container">
                <h2>Self-assessment mode</h2>
                <p>Judge by yourself whether you got it right or not.</p>
            </div>
            <div className="container">
                <h2>Multiple-choice mode</h2>
                <p>Select the correct reading for the designated yoji.</p>
            </div>
        </>
    )
}

export default KanjiGame