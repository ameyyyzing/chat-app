import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyCu9LJtFziZEov0b9VzYaTMb3YHBb-iyKo",
    authDomain: "chat-web-app-1a374.firebaseapp.com",
    projectId: "chat-web-app-1a374",
    storageBucket: "chat-web-app-1a374.appspot.com",
    messagingSenderId: "356913499815",
    appId: "1:356913499815:web:ab1da11b3307b61aed1582"
  };


  const app = firebase.initializeApp(config);
  export const auth = app.auth();
  export const database = app.database();
  export const storage = app.storage();