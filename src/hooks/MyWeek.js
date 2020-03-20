import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import FullCalendar from '@fullcalendar/react'
import firebase from "firebase"

import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css'


function MyWeek(props) {

    let [events, updateEvents] = useState([])
    var database = firebase.database()

    function buildEvent()
    {
        console.log(database.ref(`/users/${props.uid}/logs`))
        updateEvents([...events])  // consistent datetime
    }

    useEffect(() => {
        buildEvent()
    }, [])

    return (
        <div className="my-week">
            <Link to="/exercises">
                <button className="add-exercise">Add Exercise +</button>
            </Link>
            <FullCalendar defaultView="dayGridWeek" 
            header={{left:   'title',center: '',right:  'today prev,next'}}
            titleFormat={{day: 'numeric'}}
            events={events}
            plugins={[ dayGridPlugin ]} />
        </div>
    )
}

export default MyWeek