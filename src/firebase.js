import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5-MqsJBb6HCA3WyLk9sRWOXevW8bLyVs",
    authDomain: "react-chat-laceyc.firebaseapp.com",
    databaseURL: "https://react-chat-laceyc.firebaseio.com",
    projectId: "react-chat-laceyc",
    storageBucket: "react-chat-laceyc.appspot.com",
    messagingSenderId: "452520411574",
    appId: "1:452520411574:web:145f6e5531cfc0f541c117",
    measurementId: "G-J2T9J5KGP0"
};
firebase.initializeApp(firebaseConfig);

export default firebase; 