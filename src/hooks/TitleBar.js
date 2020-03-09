import React from "react"

function TitleBar(props) {
    return (
        <div className="title-bar">
            <h2>{props.children}</h2>
        </div>
    )
}

export default TitleBar