import React, { useState, useEffect } from "react"

function EntryList({items}){

    let [exercises, setExercises] = useState([])
    let [show, setShow] = useState(false);

    useEffect(() => {
        items.forEach(item => {
            // console.log(item.val())
            setExercises(prevExercises => [...prevExercises, <li>{item.val().exercise}</li>])
        })
    }, [])

    function handleClick(e) {
    }

    return (
        <li 
            className={`entry-item ${show ? "show" : ""}`} 
            key={items.key} 
            onClick={() => setShow(prev => !prev)}
            >

            {items.key}
            
            <ul className="entry-list">
                {exercises}
            </ul>

        </li>
    )
}

export default EntryList