import React from "react"

function SearchBar(props)
{
    return(
        <div className="search_bar">
            <input 
                type="text" 
                className="search" 
                onKeyPress={props.handlePress} 
                placeholder="search for an exercise..."
            />
        </div>
    )
}

export default SearchBar