import React,{useState, useEffect} from "react"
import EntryList from "./EntryList"
import firebase from "firebase"

function EditEntries(props) {


    var [dates, setDates] = useState()
    var [entries, setEntries] = useState()
    var ref = firebase.database().ref(`/users/${props.uid}/logs`)   // get a reference to the logs section of data in the firebase RTDB 

    useEffect(() => {
        let test =[]
        ref.on('value', (snapshot) => {
            snapshot.forEach(date => {
                console.log(date.val())
                test.push(<EntryList items={date}/>)
            })
            setDates([...test])
            setEntries(snapshot.val())
        }) 
        return () => ref.off()   
    }, [])

    return (
        <div className="edit-page">
            <ul>
                {dates}
            </ul>
        </div>
    )
}

export default EditEntries