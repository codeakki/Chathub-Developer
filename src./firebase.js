import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0SesC_tFZftmhmfdCWjtu0RfIo-Tiyic",
    authDomain: "chathut-developers.firebaseapp.com",
    projectId: "chathut-developers",
    storageBucket: "chathut-developers.appspot.com",
    messagingSenderId: "620378595894",
    appId: "1:620378595894:web:9d03d7bfb7ed2eb1662e97",
    measurementId: "G-E1NTHTDZHY"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;
