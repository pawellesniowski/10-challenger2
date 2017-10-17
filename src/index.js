import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import { firebaseApp } from './firebase.js';
import rootReducer from './reducers';
import { actionCreatorLogUser } from './actions';

const store = createStore(rootReducer);


firebaseApp.auth().onAuthStateChanged(user=>{
    if(user){
        console.log("user is sign in ", user);
        const { email } = user;
        store.dispatch(actionCreatorLogUser(email));
    } else {
        console.log("user is not sign in");
    }
})

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);