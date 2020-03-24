import React from "react"
import image from "../assets/deadlifting.png"

const IntroContent = (props) => {
    return (
        <div className="intro-content-container">
            {/* <img src={image} alt="man-deadlifting"/> */}
            <div className="intro-text">
                <div className="intro-heading">Track Your Progress</div>
                <div className="intro-leadin">Get Better Results</div>
            </div>
            {props.children}
        </div>
    )
}

export default IntroContent