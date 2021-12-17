import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDWvN2acwJcpDoRaOhIasUOI1RNWRi0Y9A",
    authDomain: "e-ride-ff92e.firebaseapp.com",
    projectId: "e-ride-ff92e",
    storageBucket: "e-ride-ff92e.appspot.com",
    messagingSenderId: "717289054692",
    appId: "1:717289054692:web:45bdc39f2af9239b6f67f1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();