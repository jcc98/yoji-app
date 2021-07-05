import React, { useState, useEffect } from "react"
import yojiAll from "./json/yojiAll.json";
import { array } from "prop-types";

function Search() {
    const [searchWord, setSearchWord] = useState("")


    return(
        <>
            <h3>Search</h3>
            <p>Search by kanji (not kana)</p>
            <input type="text" placeholder="Search for yoji..." onChange={e => {setSearchWord(e.target.value)}}></input>
            {yojiAll.filter((word) => {
                if (searchWord == "") {
                    return ""
                } else if (word.word.includes(searchWord)) {
                    return word
                }
            })
            .map((val, key) => {
                return (
                    <div key={key}>
                        <h1>{val.word}</h1>
                    </div>
                )
            })}            
        </>
    )
}

export default Search