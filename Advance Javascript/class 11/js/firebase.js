// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiD6BhRrYtWYEuSd-dYvE_WPOKf_pybx8",
  authDomain: "smit-batch-011.firebaseapp.com",
  projectId: "smit-batch-011",
  storageBucket: "smit-batch-011.appspot.com",
  messagingSenderId: "174924784108",
  appId: "1:174924784108:web:9ffd7a2e823a95443aa0c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// AUTH
const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  doc,
  setDoc,
};
