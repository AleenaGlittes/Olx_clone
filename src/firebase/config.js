import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBgHUWtm6wOMyHS2BcAEk1ngPD0XAHEhYA",
    authDomain: "fir-7e2a7.firebaseapp.com",
    projectId: "fir-7e2a7",
    storageBucket: "fir-7e2a7.appspot.com",
    messagingSenderId: "510464397886",
    appId: "1:510464397886:web:54d1e033249c8258a5376f",
    measurementId: "G-PLE9CX8QFN"
  };

  export  default firebase.initializeApp(firebaseConfig)