import React, { useState, useEffect } from "react"

function EntryList({items, deleteEntry, reference}){

    let [exercises, setExercises] = useState([])
    var [entries, setEntries] = useState([])
    let [show, setShow] = useState(false);
    let [ref, setRef] = useState(reference)

    useEffect(() => {
        let test = []
        items.forEach(item => {
            let entry = item.val()
            console.log(item.val())
            if(item.val().restDay) test.push(
                <li key={item.ref.key}>
                    <h1>Rest day</h1>
                    <button className="del-btn"                                                         // Rest Day
                    onClick={() => deleteItems(item.ref.key, items.key)}>Delete Entry?</button> 
                </li>
            )
            else
            test.push(
                <li key={item.ref.key}>
                    <b>{entry.exercise}</b>
                    <ul class="entry">
                        <li>Sets: {entry.sets}</li> 
                        <li>Reps: {entry.reps}</li>                                                     {/* Regular Entry*/}
                        <li>Weight: {entry.weight} {entry.measurement}</li>
                    </ul>
                    <button className="del-btn"
                    onClick={() => deleteItems(item.ref.key, items.key)}>Delete Entry?</button> 
                </li>
            )
            setEntries(prevEntries => [...prevEntries, entry])
        })
        setExercises([...test])
    }, [])

    function deleteItems(refKey, key) {
        deleteEntry(refKey, key)
        
        setExercises(prev => {
            let newArr = prev.filter(item => item.key !== refKey)
            
            return newArr
        })
    }

    return (
        <li 
            className={`entry-item ${show ? "show" : ""}`} 
            key={items.key} 
            >

            <h3 onClick={() => setShow(prev => !prev)}>{items.key}</h3>
            
            <ul className="entry-list">
                {exercises}
            </ul>

        </li>
    )
}

export default EntryList