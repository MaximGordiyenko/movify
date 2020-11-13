import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBjz3nsGhPy2afPKRioD_DuNs28lM7Cilg",
  authDomain: "movify-99c2b.firebaseapp.com",
  databaseURL: "https://movify-99c2b.firebaseio.com",
  projectId: "movify-99c2b",
  storageBucket: "movify-99c2b.appspot.com",
  messagingSenderId: "847060748946",
  appId: "1:847060748946:web:82ed79201736b78da3744b",
  measurementId: "G-TVDZ9NH2DF"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
