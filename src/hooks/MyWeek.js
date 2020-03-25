import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import FullCalendar from '@fullcalendar/react'
import firebase from "firebase"

import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css'


function MyWeek(props) {

    let [events, updateEvents] = useState([])
    var ref = firebase.database().ref(`/users/${props.uid}/logs`)   // get a reference to the logs section of data in the firebase RTDB 
    

    function buildEvent()
    {
        ref.on('value', (snapshot) => {                                                                                           
            snapshot.forEach(date => {                              // for each DATE in logged in the user's logs                       
                    date.forEach(exercise => {                      // grab each EXERCISE logged on that DATE        
                        let entry = exercise.val()    
                        let eventObject = {}
                        
                        if(entry.restDay) {
                            eventObject = {
                                id: exercise.key,                      
                                title: "Rest Day",                  
                                start: date.key,
                                color: '#D4F6FF'
                            }
                        }
                        else
                        {
                            eventObject = 
                            {
                                id: exercise.key,                       // parse it into an Event Object so the <Calendar /> component can read it 
                                title: `
                                        <b>${entry.exercise}</b>
                                        <ul>
                                            <li>Sets: ${entry.sets}</li>
                                            <li>Reps: ${entry.reps}</li>
                                            <li>Weight: ${entry.weight} ${entry.measurement}</li>
                                        <ul>`,                
                                start: date.key,
                                reps: entry.reps,
                                color: '#D4F6FF'
                            }
                        }               
                
                        updateEvents(prevEvents => {
                            return [...prevEvents, eventObject]     // update the events state so that the calendar will also be updated 
                        })
                    })
            })
        })
    }

    useEffect(() => {
        buildEvent()
        return () => ref.off()                                      // remove listeners from the DB reference
    }, [])

    function allowHTML (info) {
        info.el.querySelector('.fc-title').innerHTML = info.event.title;         // allow html in the title
    }

    return (
        <div className="my-week">
            <Link to="/exercises">
                <button className="add-exercise">Add Exercise +</button>
            </Link>
            <FullCalendar 
                        defaultView="dayGridWeek" 
                        header={{left:   'title',center: '',right:  'today prev,next'}}
                        titleFormat={{day: 'numeric'}}
                        events={events}
                        eventRender={allowHTML}
                        plugins={[ dayGridPlugin ]} 
            />
        </div>
    )
}

export default MyWeek