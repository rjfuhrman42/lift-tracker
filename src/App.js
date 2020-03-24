import React, {useState, useEffect} from 'react';
import {
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Context from "./context"

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
  const [userID, setUserID] = useState();

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
      if(user){
                setIsSignedIn(true)  
                setUserID(user.uid)  
      }
      else setIsSignedIn(false);
    })
  }, [])

  // user is signed in (and their ID has been set) return their contents, wrap in the context provider, so that we can provide components with the USERID
  
  if(isSignedIn && userID) return (
    <Context.Provider value={userID}>
      <div className="App">
        <Navbar>
          <li>
            <Link to="/">Today</Link>
          </li>
          <li>
            <Link to="/myweek">My Week</Link>
          </li>
          <li>
            <Link to="/exercises">Exercises</Link>
          </li>
          <li>
            <button onClick={() => fire.auth().signOut()}>Sign out</button> 
          </li>                                            
        </Navbar>
        
        <TitleBar>{location.pathname === '/exercises' ? 'Exercise Search' : `${month} ${today.getFullYear()}`}</TitleBar>
        
        <Switch>
          <Route exact path="/">
            <Today uid={userID} today={today}/>
          </Route>
          <Route path="/myweek">
            <MyWeek uid={userID}/>
          </Route>
          <Route path="/exercises">
            <Exercises />
          </Route>
        </Switch>
      </div>
    </Context.Provider>
  )

  // otherwise render the main page
  else return (
    <div className="App">
        <Navbar>
          <li>About</li> 
          {/* <li>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()}/>
          </li> */}

        </Navbar>
        <IntroContent>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()}/>
        </IntroContent>
    </div>
  );
}

export default App;
