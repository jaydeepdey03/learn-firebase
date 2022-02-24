import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAl3l3QKp9sPA8NkDYrFh80oDTAqU1O03A",
  authDomain: "test-6ccee.firebaseapp.com",
  projectId: "test-6ccee",
  storageBucket: "test-6ccee.appspot.com",
  messagingSenderId: "1026762539944",
  appId: "1:1026762539944:web:dc88b93883d2cd4cf1539d",
  measurementId: "G-530V5EGWMH"
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);

export default db