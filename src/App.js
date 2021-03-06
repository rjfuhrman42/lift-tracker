import React, {useState, useEffect} from 'react';
import {
  Switch,
  Route,
  NavLink,
  useLocation
} from "react-router-dom";
import Context from "./context"

import Today from "./components/Today"
import About from "./components/About"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import MyWeek from "./components/MyWeek"
import TitleBar from "./components/TitleBar"
import Exercises from "./components/Exercises"
import EditEntries from "./components/EditEntries"
import IntroContent from "./components/IntroContent"

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
            <NavLink to="/" exact={true} activeClassName="selected"> Today </NavLink>
          </li>
          <li>
            <NavLink to="/myweek" activeClassName="selected"> My Week </NavLink>
          </li>
          <li>
            <NavLink to="/exercises" activeClassName="selected"> Exercises </NavLink>
          </li>
          <li>
            <NavLink to="/edit" activeClassName="selected"> Edit </NavLink>
          </li>
          <li>
            <button onClick={() => fire.auth().signOut()} className="sign-out-btn">Sign out</button> 
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
          <Route path="/edit">
            <EditEntries uid={userID}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Context.Provider>
  )

  // otherwise render the main page
  else return (
    <div className="App">
        <Navbar>
          <li>
            <a href="#about">About</a>
          </li> 
          {/* <li>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()}/>
          </li> */}

        </Navbar>
        <IntroContent>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()}/>
        </IntroContent>
        <About />
        <Footer />
    </div>
  );
}

export default App;
