// import productArr from "./product.js"
// import { userEmail, userName } from "./product.js"
// console.log("productArr", productArr, userEmail, userName)


// Firease Imp URLs
// https://firebase.google.com/docs/web/setup



import { addDoc, app, collection, db, getDocs } from "./firebase.js"



// const submitbtn = document.getElementById("submitbtn")

// submitbtn.addEventListener("click", async () => {
//     console.log("formSubmit")

//     const todoObj = {
//         todo: "HELLO WORLD"
//     }

//     // collection(kaha create karo , kis name sy)
//     // First we create Firestore collection
//     const todoCollection = collection(db, "todo")

//     // Add doc on firestore
//     // addDoc(collection , obj)
//     const response = await addDoc(todoCollection, todoObj)
//     console.log(response, "response")

// })

// window.addEventListener("load", async () => {
//     const querySnapshot = await getDocs(collection(db, "todo"))
//     querySnapshot.forEach((doc) => {
//         console.log("doc", doc.data(), doc.id) 
//     })
// })



const formSubmit = document.getElementById("formSubmit")
formSubmit.addEventListener("click", async () => {
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const contact = document.getElementById("contact")
    console.log("name.value", name.value, email.value, contact.value)
    const userObj = {
        name: name.value,
        email: email.value,
        contact: contact.value,
    }


    const userCollection = collection(db, "user")

    const response = await addDoc(userCollection, userObj)
    console.log(response, "response")


})