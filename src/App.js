import React, {useState, useEffect} from 'react';
import {
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import Navbar from "./hooks/Navbar"
import Today from "./hooks/Today"
import MyWeek from "./hooks/MyWeek"
import Exercises from "./hooks/Exercises"
import TitleBar from "./hooks/TitleBar"
import IntroContent from "./hooks/IntroContent"

import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import fire from "./config/Fire"

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const today = new Date(Date.now())                                      // get Todays full date
  var options = { month: 'long'};                                         // So we can get the month into the proper format
  const month = new Intl.DateTimeFormat('en-US', options).format(today)

  let location = useLocation();
  

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
          <li>
            <Link to="/today">Today</Link>
          </li>
          <li>
            <Link to="/myweek">My Week</Link>
          </li>
          <li>
            <Link to="/exercises">Exercises</Link>
          </li>                                            
          <button onClick={() => fire.auth().signOut()}>Sign out</button> 
        </Navbar>
        
        <TitleBar>{location.pathname === '/exercises' ? 'Exercise Search' : `${month} ${today.getFullYear()}`}</TitleBar>
        
        <Switch>
          <Route path="/today">
            <Today props={today}/>
          </Route>
          <Route path="/myweek">
            <MyWeek/>
          </Route>
          <Route path="/exercises">
            <Exercises/>
          </Route>
        </Switch>
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
