import React from "react"
import ModalButton from './Modal/ModalButton';

function TitleBar(props) {
    return (
        <div className="title-bar">
            <ModalButton rest="true"/>
            <h2>{props.children}</h2> 
        </div>
    )
}

export default TitleBar