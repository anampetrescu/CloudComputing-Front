import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw8HFyPaTR8HYtQ_nHI_QjxdyjIBtWZtQ",
  authDomain: "proiect-cc-5f6af.firebaseapp.com",
  projectId: "proiect-cc-5f6af",
  storageBucket: "proiect-cc-5f6af.appspot.com",
  messagingSenderId: "685971029406",
  appId: "1:685971029406:web:5475d66015cf34bf38ea8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
       const name = result.user.displayName;
       const email = result.user.email;
       const profilePic = result.user.photoURL;

       localStorage.setItem("name", name);
       localStorage.setItem("email", email);
       localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
        console.log(error);
    });
}