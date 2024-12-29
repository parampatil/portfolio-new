import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBz911s4ms4qabE3ksg2NKb9r_WdIGWIM8",
    authDomain: "portfolio-auth-1f615.firebaseapp.com",
    projectId: "portfolio-auth-1f615",
    storageBucket: "portfolio-auth-1f615.firebasestorage.app",
    messagingSenderId: "371765694448",
    appId: "1:371765694448:web:85d1f9bd9099ae19835735",
    measurementId: "G-28P6M25J4F"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

// Function to log in with email and password
export const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };