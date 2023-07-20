import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ8rHmpDdhpZSAkcupDE-xfCUzVCxl_ZA",
  authDomain: "webbase-792ce.firebaseapp.com",
  projectId: "webbase-792ce",
  storageBucket: "webbase-792ce.appspot.com",
  messagingSenderId: "201040807029",
  appId: "1:201040807029:web:dcfc1bb83277f361ebe43c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authFirebase = getAuth(app);

export const renderRecaptcha = () => {
  if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
          'size': 'invisible',
      }, authFirebase)
  }
  return window.recaptchaVerifier
}