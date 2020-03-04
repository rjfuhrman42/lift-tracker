import React, {useState, useEffect} from 'react';

import Navbar from "./hooks/Navbar"
import IntroContent from "./hooks/IntroContent"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import fire from "./config/Fire"

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [                              // this is needed to style the google sign in button
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  }

  useEffect(() => {                               // check if the user is logged in on page load 
      fire.auth().onAuthStateChanged((user) => {

      // if the user is logged in set is to be true
      if(user) setIsSignedIn(true)    
      else setIsSignedIn(false);

    })
  }, [])

  // user is signed in return their contents
  if(isSignedIn) return (
    <div className="App">
        <Navbar>
          <li>Today</li>
          <li>My Week</li>
          <li>Exercises</li>                                             
          <li>Goals</li>
          <button onClick={() => fire.auth().signOut()}>Sign out</button> 
        </Navbar>
    </div>
  )
  // otherwise render the main page
  else return (
    <div className="App">
        <Navbar>
          <li>About</li>
          <li>Exercises</li>    
          <li>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()}/>
          </li>

        </Navbar>
        <IntroContent />
    </div>
  );
}

export default App;
