import React from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css'

function MyWeek() {
    return (
        <>
            <FullCalendar defaultView="dayGridWeek" 
            header={{left:   'title',center: '',right:  'today prev,next'}}
            titleFormat={{day: 'numeric'}}
            plugins={[ dayGridPlugin ]} />
        </>
    )
}

export default MyWeek