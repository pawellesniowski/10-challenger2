import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { firebaseApp } from './firebase.js';


firebaseApp.auth().onAuthStateChanged(user=>{
    if(user){
        console.log("user is sign in ", user);
    } else {
        console.log("user is not sign in");
    }
})

ReactDOM.render(
        <App/>,
    document.querySelector('#root')
);