// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyD3uO5fHsOPwMG8pMnIQv2E5ffBdH3WyiI",
    authDomain: "fake-store-e0c91.firebaseapp.com",
    projectId: "fake-store-e0c91",
    storageBucket: "fake-store-e0c91.appspot.com",
    messagingSenderId: "975000297706",
    appId: "1:975000297706:web:f24f86e53256d93ab4b793",
    measurementId: "G-4J9QX8L1RT"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
export {auth };