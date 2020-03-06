import React from "react"

function TitleBar(props) {
    return (
        <div className="title-bar">
            <h1>{props.children}</h1>
        </div>
    )
}

export default TitleBar