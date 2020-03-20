import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import firebase from "firebase"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css'

const Today = (props) => {

    let [events, updateEvents] = useState([])
    var ref = firebase.database().ref(`/users/${props.uid}/logs`)                 // get a reference to the logs section of data in the firebase RTDB 

    var options = { weekday: 'long'};
    const theDay = new Intl.DateTimeFormat('en-US', options).format(props.today)  // from mdn docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
                                                                                  // converts day number to actual day (e.g. 5 to Friday)
    
    function buildEvent() {
        console.log('here')
        ref.on('value', (snapshot) => {
            snapshot.forEach(date => {
                let cur = new Date(date.key)
                if(
                       cur.getUTCDate() === props.today.getUTCDate() 
                    && cur.getUTCMonth() === props.today.getUTCMonth()            // ugly but, I'm not sure how to make this better
                    && cur.getUTCFullYear() === props.today.getUTCFullYear()      // compare day, month, and year 
                )
                {
                    date.forEach(exercise => {                                    // grab each EXERCISE logged on that DATE        
                        let entry = exercise.val()                  
                        let eventObject = 
                        {
                            id: exercise.key,                                     // parse it into an Event Object so the <Calendar /> component can read it 
                            title: `${entry.exercise}
                                    Reps: ${entry.reps}
                                    Sets: ${entry.sets}
                                    Weight: ${entry.weight} ${entry.measurement}`,                  
                            start: date.key,
                            reps: entry.reps,
                            color: '#D4F6FF'
                        }
                        updateEvents(prevEvents => {
                            return [...prevEvents, eventObject]                   // update the events state so that the calendar will also be updated 
                        })
                    })
                }
            })
        })
    }     

    useEffect(() => {
        buildEvent()
        return () => ref.off()                                      // remove listeners from the DB reference
    }, [])                                                                      

    return (
        <div className="today">
            <Link to="/exercises">
                <button className="add-exercise">Add Exercise +</button>
            </Link>
            <FullCalendar 
                        defaultView='dayGrid'
                        dayCount={1}
                        header={{left: '', center: 'title', right: ''}}     // re-use the calendar component and only display a single day
                        titleFormat={{weekday: 'long'}}
                        columnHeader={false}
                        events={events}
                        plugins={[ dayGridPlugin ]} 
            />
        </div>
    )
}

export default Today 