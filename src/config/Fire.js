import firebase from "firebase";

require('dotenv').config();

  var firebaseConfig = {
    apiKey: process.env.REACT_APP_LIFT_TRACKER_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_LIFT_TRACKER_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_LIFT_TRACKER_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_LIFT_TRACKER_FIREBASE_KEY,
    storageBucket: process.env.REACT_APP_LIFT_TRACKER_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_LIFT_TRACKER_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_LIFT_TRACKER_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_LIFT_TRACKER_FIREBASE_MEASUREMENT_ID
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

export default fire;
// 