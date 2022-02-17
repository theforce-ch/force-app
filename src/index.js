import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from "firebase/app";
import {getAuth, connectAuthEmulator, signInWithEmailAndPassword} from "firebase/auth"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

let app = initializeApp(firebaseConfig)
let auth = getAuth(app)
connectAuthEmulator(auth, "http://localhost:9099")
const loginEmailPassword = async () => {

    let foo = await signInWithEmailAndPassword(auth, "demo@demo.dev", "123456")
    console.log(JSON.stringify(foo, null, 4))
}

if (process.env.NODE_ENV === 'local') {
    console.info("STAGE: LOCAL")
}
if (process.env.NODE_ENV === 'development') {
    console.info("STAGE: DEVELOPMENT")
}
if (process.env.NODE_ENV === 'production') {
    console.info("STAGE: PROD")
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
