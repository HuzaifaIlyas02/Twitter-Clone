import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDyUlCP_quheP8Eyoado-xGl9nEKCjsRNw",
    authDomain: "twitter-clone-16b14.firebaseapp.com",
    projectId: "twitter-clone-16b14",
    storageBucket: "twitter-clone-16b14.appspot.com",
    messagingSenderId: "525486938614",
    appId: "1:525486938614:web:798edb1d19e1b721364fd7",
    measurementId: "G-HT2H5P0HPE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
