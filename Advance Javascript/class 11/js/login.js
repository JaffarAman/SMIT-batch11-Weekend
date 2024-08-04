import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  setDoc,
  signInWithEmailAndPassword,
} from "./firebase.js";

const email = document.getElementById("email");
const password = document.getElementById("password");

const loginHandler = async () => {
  try {
    const userSignup = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const uid = userSignup.user.uid;
    // save user data on firestore
    localStorage.setItem("uid", uid);
    alert("user login!");
    location.href = "../index.html";
  } catch (error) {
    alert(error.message);
  }
};

window.loginHandler = loginHandler;
