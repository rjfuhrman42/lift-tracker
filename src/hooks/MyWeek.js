import React, {useState} from "react"
import {Link} from "react-router-dom"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css'

function MyWeek() {

    let [events, updateEvents] = useState([])

    function buildEvent()
    {
        updateEvents([...events, { title: 'deadlift', start: new Date() }])  // consistent datetime
    }

    return (
        <div className="my-week">
            <Link to="/exercises">
                <button class="add-exercise">Add Exercise +</button>
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