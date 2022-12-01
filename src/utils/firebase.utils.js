import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWroqUTOVwLYxpbE1CelJ4kf7n7-lesQs",
  authDomain: "crwn-clothing-ab603.firebaseapp.com",
  projectId: "crwn-clothing-ab603",
  storageBucket: "crwn-clothing-ab603.appspot.com",
  messagingSenderId: "225870292524",
  appId: "1:225870292524:web:0ca6cff4cec65d1aa71389",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error){
      console.log("error creating user", error.message);
    }
  }
  return userDocRef
};
