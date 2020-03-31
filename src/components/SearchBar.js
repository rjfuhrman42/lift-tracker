import React from "react"
import icon from "../assets/black_mag.png"

function SearchBar({handlePress, handleClick})
{
    return(
        <div className="search_bar">
            <input 
                type="text" 
                className="search" 
                onKeyPress={handlePress} 
                placeholder="type an exercise name to get results..."
            />
            <button onClick={handleClick} className="search-button">
                
            </button>
        </div>
    )
}

export default SearchBar