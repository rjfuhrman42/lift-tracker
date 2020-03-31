import React from "react"
import {Link} from "react-router-dom"

const Navbar = (props) => {
    return (
        <header>
            <div className="my-container">
                <Link to="/">
                    <h1 className="main-heading">Lift Tracker</h1>
                </Link>
                <nav>
                    <ul className="nav-options">
                        {props.children}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar