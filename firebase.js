// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPv5uDaQTuSkhjcbkP7AN1CbETsZNIO8A",
    authDomain: "horse-209e4.firebaseapp.com",
    projectId: "horse-209e4",
    storageBucket: "horse-209e4.appspot.com",
    messagingSenderId: "978654513789",
    appId: "1:978654513789:web:c58f860540aa60633a3f14",
    measurementId: "G-VFE2W64CQQ"
  };

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };