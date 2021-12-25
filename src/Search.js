import React, { useState } from "react"
import yojiAll from "./json/yojiAll.json";
import "./Search.css"
import SimpleModal from "./Modal"



function Search() {
    const [searchWord, setSearchWord] = useState("")

    return(
        <>
            <h3>Search</h3>
            <p>Search by kanji (not kana)</p>
            <input type="text" placeholder="Search for yoji..." onChange={e => {setSearchWord(e.target.value)}}></input>
            {yojiAll.filter((word) => {
                if (searchWord === "") {
                    return ""
                } else if (word.word.includes(searchWord)) {
                    return word
                }
                return null
            })
            .map((val, key) => {
                return (
                    <>
                        <div key={key}>
                            {<SimpleModal word={val.word} yomi={val.yomi} grade={val.grade} def={val.def}/>}
                        </div>

                    </>
                )
            })}            
        </>
    )
}

export default Search