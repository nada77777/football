// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDedfxtDMgSwKavUbldw4hBsZcHWfdQua4",
    authDomain: "football-e0a5a.firebaseapp.com",
    databaseURL: "https://football-e0a5a-default-rtdb.firebaseio.com",
    projectId: "football-e0a5a",
    storageBucket: "football-e0a5a.appspot.com",
    messagingSenderId: "75466005842",
    appId: "1:75466005842:web:bc98f7cd62bc48f2d82e8b",
    measurementId: "G-7VN8135WHR"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
