import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import * as firebase from "firebase/app";

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "nextnews-c4936.firebaseapp.com",
  projectId: "nextnews-c4936",
  storageBucket: "nextnews-c4936.appspot.com",
  messagingSenderId: "106744289798",
  appId: "1:106744289798:web:f38f13f2da68e0c1918187",
  measurementId: "G-T55SF9X2D9",
});

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user;
      console.log(credential);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};
