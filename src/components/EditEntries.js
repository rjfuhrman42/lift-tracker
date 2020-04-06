import React,{useState, useEffect} from "react"
import EntryList from "./EntryList"
import firebase from "firebase"

function EditEntries(props) {


    var [dates, setDates] = useState([])
    var [ref, setRef] = useState(firebase.database().ref(`/users/${props.uid}/logs`))


    useEffect(() => {
        getLogs()
    }, [])


    function getLogs() {
        ref.on('value',  (snapshot) => {
            let items = []
            snapshot.forEach(date => {
                items.push(
                    <li key={date.key}>
                        <EntryList items={date} deleteEntry={deleteEntry} />
                    </li>)

            })
            setDates([...items])
        })
    }

    function deleteEntry(key, date) {
        var refer = firebase.database().ref(`/users/${props.uid}/logs/${date}`).child(key)
        refer.remove()
    }

    return (
        <div className="edit-page">
            <ul>
                {dates}
                {console.log(dates)}
            </ul>
        </div>
    )
}

export default EditEntries