
import { initializeApp } from "firebase/app";

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


export const firebase = initializeApp(firebaseConfig);
