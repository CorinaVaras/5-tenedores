import firebase from "@firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWYHLzthEkmGDkuRHtFkqUM0pQLQcgIkI",
  authDomain: "tenedores-f0749.firebaseapp.com",
  databaseURL: "https://tenedores-f0749.firebaseio.com",
  projectId: "tenedores-f0749",
  storageBucket: "tenedores-f0749.appspot.com",
  messagingSenderId: "593169957989",
  appId: "1:593169957989:web:11e112cb4bbd75ab89728c",
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
