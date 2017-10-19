import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAKNToC5H6uYb7o2To8Dqx_zQxRMDVAeo8",
    authDomain: "challenger2-3de86.firebaseapp.com",
    databaseURL: "https://challenger2-3de86.firebaseio.com",
    projectId: "challenger2-3de86",
    storageBucket: "challenger2-3de86.appspot.com",
    messagingSenderId: "182435007071"
};

export const firebaseApp = firebase.initializeApp(config);
export const challengeRef = firebase.database().ref('challenges');
export const completedRef = firebase.database().ref('completed');