import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAPvHViUQiQrkx_hjxxAbP8c0BYOkebymc",
    authDomain: "twitter-clone-156c6.firebaseapp.com",
    projectId: "twitter-clone-156c6",
    storageBucket: "twitter-clone-156c6.appspot.com",
    messagingSenderId: "242917673769",
    appId: "1:242917673769:web:e6118485681b010bbcc538",
    measurementId: "G-G2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;