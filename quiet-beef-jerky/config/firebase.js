
import firebase from 'firebase' ;
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBSkhuqz4_fM9oVQGkY3FEjQQvV0G4_xLA",
  authDomain: "hotel-app-bbc60.firebaseapp.com",
  projectId: "hotel-app-bbc60",
  storageBucket: "hotel-app-bbc60.appspot.com",
  messagingSenderId: "61563225777",
  appId: "1:61563225777:web:bb1851876db463c6a04490",
  measurementId: "G-FTCXCSEDHH"
};

firebase.initializeApp(firebaseConfig)


export {firebase}