// Firebase configuration

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyB3HdBbKpdshif4unY95go4vTbBd9DT_PU",
    authDomain: "farmers-portal-e87bc.firebaseapp.com",
    projectId: "farmers-portal-e87bc",
    storageBucket: "farmers-portal-e87bc.appspot.com",
    messagingSenderId: "828796497004",
    appId: "1:828796497004:web:beefa323552aca55f0bc49"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
