import React from "react"

const Navbar = (props) => {
    return (
        <header>
            <div className="container">
                <h1>Lift Tracker</h1>
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