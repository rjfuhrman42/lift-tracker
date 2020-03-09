import React, {useState} from "react"
import SearchBar from "./SearchBar"

import ModalButton from './Modal/ModalButton';

function Exercises() {

    const [results, updateResults] = useState("")

    async function getExercises(api_url)
    {
        fetch(api_url)
        .then(exercises => exercises.json())
        .then(data => {
                        if(data.suggestions.length === 0) updateResults(<li>No results found!</li>)
                        else
                        updateResults(data.suggestions
                        .map(item => 

                            <li key={item.data.id}>
                                {item.data.name}
                                <ModalButton>add</ModalButton>
                            </li>))
                      })
    }

    const handlePress = (e) => {
        if(e.key === "Enter" && e.target.value) // check if enter key is pressed and if the search query defined
        {
            getExercises(`https://wger.de//api/v2/exercise/search/?term=${e.target.value}`)
        }
        
    }

    return (
        <React.Fragment>
            <SearchBar handlePress={handlePress}/>
            <ul className="results-list">
                {results} 
            </ul>
        </React.Fragment>
    )
}

export default Exercises