import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
//import {firebaseConfig} from "./config/oauth";
import {Emulator} from "./config/emulator";

//let app = initializeApp(firebaseConfig)
let auth = getAuth()
Emulator(auth)

const loginEmailPassword = async () => {
    let currentUser = await signInWithEmailAndPassword(auth, "demo@demo.dev", "123456")
    console.info(currentUser.user.email)
}

loginEmailPassword().then(r => r)

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
