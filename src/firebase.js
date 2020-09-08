import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBtlwV_rZA0xWT8nlu-rtKeMlZ-5S3DujM",
  authDomain: "fb-clone-34569.firebaseapp.com",
  databaseURL: "https://fb-clone-34569.firebaseio.com",
  projectId: "fb-clone-34569",
  storageBucket: "fb-clone-34569.appspot.com",
  messagingSenderId: "153885707223",
  appId: "1:153885707223:web:579b9a7795fa6b254e5992",
  measurementId: "G-R1XZ64E53P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
