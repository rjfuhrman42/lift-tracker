import React from "react"
import {Link} from "react-router-dom"

const Today = (props) => {

    var options = { weekday: 'long'};
    const theDay = new Intl.DateTimeFormat('en-US', options).format(props.today)  // from mdn docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
                                                                                  // converts day number to actual day (e.g. 5 to Friday)
    return (
        <div className="today">
            <h1>{theDay}</h1>
            <Link to="/exercises">
                <button class="add-exercise">Add Exercise +</button>
            </Link>
        </div>
    )
}

export default Today 