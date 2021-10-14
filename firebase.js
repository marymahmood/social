import firebase from "firebase/app";
import 'firebase/storage'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAKSnEOdNIRahVBk-Pfzc1eWeRsxqsAvvw",
  authDomain: "facebook-clone-a24ad.firebaseapp.com",
  projectId: "facebook-clone-a24ad",
  storageBucket: "facebook-clone-a24ad.appspot.com",
  messagingSenderId: "892840250113",
  appId: "1:892840250113:web:d4eb5971a811c4e2ad2900"
};

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export { db, storage }
