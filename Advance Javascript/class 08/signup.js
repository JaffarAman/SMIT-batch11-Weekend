import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  setDoc,
  signInWithEmailAndPassword,
} from "./firebase.js";

const signUpHandler = async () => {
  try {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const fullName = document.querySelector("#fullName");
    const gender = document.querySelector("#gender");

    // db obj
    const userObj = {
      fullName: fullName.value,
      gender: gender.value,
      email: email.value,
    };
    console.log("userObj", userObj);
    // firstly user signup
    const response = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const uid = response.user.uid;

    const userResponse = await setDoc(doc(db, "users", uid), userObj);
    alert("user successfully signup")
    window.location.href = "./login.html"
    // console.log("userResponse", userResponse);
    // console.log(response, "response");
  } catch (error) {
    console.log("error", error.message);
    alert(error.message);
  }
};

window.signUpHandler = signUpHandler;

// Create DATA ON FIRESTORE
// 1st way
// addDoc => auto generate doc id
// addDoc(collection(db , collectionName))

// 2nd way
// setDoc == >doc id required
// setDoc(doc(db  , colllectionName , docID))

//login

// const loginHandler = async () => {
//   try {
//     // console.log("signUpHandler");
//     const email = document.querySelector("#email");
//     const password = document.querySelector("#password");
//     // console.log("email", email.value, password.value);
//     const response = await signInWithEmailAndPassword(
//       auth,
//       email.value,
//       password.value
//     );
//     console.log(response, "response");
//   } catch (error) {
//     console.log("error", error.message);
//   }
// };

// window.loginHandler = loginHandler;
