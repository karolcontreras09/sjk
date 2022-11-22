import firebase from 'firebase';

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyClDx8irk6PvidTXoRMF-bb8wTyrN-r4Os",
    authDomain: "sjkgastro.firebaseapp.com",
    projectId: "sjkgastro",
    storageBucket: "sjkgastro.appspot.com",
    messagingSenderId: "99844516034",
    appId: "1:99844516034:web:e6a5f3f528124d0402f35b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default {
    firebase,
    db,
  }