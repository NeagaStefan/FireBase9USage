import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD4N6x9uGUC5izb9VfegsBmmIu5almrngA",
    authDomain: "readinglistapp-fdd1d.firebaseapp.com",
    projectId: "readinglistapp-fdd1d",
    storageBucket: "readinglistapp-fdd1d.appspot.com",
    messagingSenderId: "500884871495",
    appId: "1:500884871495:web:b016370f6c6cfb16e4d462"
};
//init firebase
initializeApp(firebaseConfig)

//init firestore
const db = getFirestore()

const auth = getAuth()


export { db, getAuth, auth }