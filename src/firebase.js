import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJnS8OICWF54RMo7IJT1i3GTNfdn2oflE",
  authDomain: "tik-tokker.firebaseapp.com",
  projectId: "tik-tokker",
  storageBucket: "tik-tokker.appspot.com",
  messagingSenderId: "695388692750",
  appId: "1:695388692750:web:28ead3f6d1b0f54eacb75f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
