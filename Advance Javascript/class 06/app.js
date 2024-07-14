// import productArr from "./product.js"
// import { userEmail, userName } from "./product.js"
// console.log("productArr", productArr, userEmail, userName)


// Firease Imp URLs
// https://firebase.google.com/docs/web/setup



import { addDoc, app, collection, db, getDocs } from "./firebase.js"



const submitbtn = document.getElementById("submitbtn")

submitbtn.addEventListener("click", async () => {
    console.log("formSubmit")

    const todoObj = {
        todo: "HELLO WORLD"
    }

    // collection(kaha create karo , kis name sy)
    // First we create Firestore collection
    const todoCollection = collection(db, "todo")

    // Add doc on firestore
    // addDoc(collection , obj)
    const response = await addDoc(todoCollection, todoObj)
    console.log(response, "response")

})

window.addEventListener("load", async () => {

    const querySnapshot = await getDocs(collection(db, "todo"))
    querySnapshot.forEach((doc) => {
        console.log("doc", doc.data(), doc.id) 
    })


})

