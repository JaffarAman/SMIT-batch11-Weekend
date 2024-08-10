import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  setDoc,
} from "./firebase.js";

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");

const signUpHandler = async () => {
  try {
    const userObj = {
      fullName: fullname.value,
      email: email.value,
    };
    const userSignup = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const uid = userSignup.user.uid;
    // save user data on firestore

    const response = await setDoc(doc(db, "users", uid), userObj);
    alert("user signup!");
    location.href = "../pages/login.html";
    console.log(userSignup, "userSignup");
  } catch (error) {
    alert(error.message);
  }
};

window.signUpHandler = signUpHandler;
