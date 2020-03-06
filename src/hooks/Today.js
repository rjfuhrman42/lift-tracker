import React from "react"

const Today = (props) => {

    var options = { weekday: 'long'};
    const theDay = new Intl.DateTimeFormat('en-US', options).format(props.today)  // from mdn docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
                                                                            // converts day number to actual day (e.g. 5 to Friday)
    return (
        <div class="today">
            <h1>{theDay}</h1>
        </div>
    )
}

export default Today 