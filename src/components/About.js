import React from "react"

function About() {
    return (
        <div id="about" className="about-section">
            <div className="about-description-container">
                <h1>FEATURES</h1>
                <div className="description-content">
                    <h2>EXERCISE SEARCH</h2> 
                    <p>Search for the right exercise using the WGER exercise database.</p>
                </div>
                <div className="description-content">
                    <h2>TRACK ENTRIES</h2>
                    <p>Log the exercise and track your sets, reps, weight, and date.</p>
                </div>
                <div className="description-content">
                    <h2>WEEKLY CALENDAR AND DAILY VIEW</h2>
                    <p>View your entries for today, or view your weekly progress in the weekly view.</p>
                </div>
            </div>
            <div className="about-gif-container">
                <img id="about-gif" src='https://i.imgur.com/NPvetPD.gif'></img>
            </div>
        </div>
    )
}

export default About