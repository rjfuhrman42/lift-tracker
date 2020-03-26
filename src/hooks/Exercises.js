import React, {useState} from "react"
import SearchBar from "./SearchBar"
import Spinner from 'react-bootstrap/Spinner'

import ModalButton from './Modal/ModalButton';

function Exercises() {

    const [results, updateResults] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    async function getExercises(api_url)
    {
        setIsLoading(true);
        fetch(api_url)
        .then(exercises => exercises.json())
        .then(data => {
            console.log(data.suggestions)
            setIsLoading(false)
                        if(data.suggestions.length === 0) updateResults(<li>No results found!</li>)
                        else
                        updateResults(data.suggestions
                        .map(item => 

                            <li key={item.data.id}>
                                <div className="ex-name">
                                    {item.data.name}
                                </div>
                                <ModalButton modalcontent={item}>add</ModalButton>
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
            {/* <ModalButton rest="true"/> */}
            <div>
                <SearchBar handlePress={handlePress}/>
            </div>
            
            <ul className="results-list">
                {isLoading ? <li><Spinner animation="border" /></li> : results} 
            </ul>
        </React.Fragment>
    )
}

export default Exercises