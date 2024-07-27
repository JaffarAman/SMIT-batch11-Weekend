import { auth, signInWithEmailAndPassword } from "./firebase.js";

const loginHandler = async () => {
  try {
    // console.log("signUpHandler");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    // console.log("email", email.value, password.value);
    const response = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    
    window.location.replace("./index.html");
    console.log(response, "response");
  } catch (error) {
    console.log("error", error.message);
  }
};

window.loginHandler = loginHandler;
