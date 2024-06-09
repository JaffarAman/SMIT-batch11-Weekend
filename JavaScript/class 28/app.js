// console.log("Hello World!!");
var formContainer = document.getElementById("formContainer")
var startContainer = document.getElementById("startContainer")


function formSubmitHandler() {
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var nameError = document.getElementById("nameError")
    var emailError = document.getElementById("emailError")

    // localStorage.setItem("name", name.value)  //set item
    // console.log(localStorage.getItem("name")) //get item
    // localStorage.removeItem("name") // remove item

    if (!name.value) {
        nameError.className = "show"
        nameError.style.color = "red"
        return
    }

    if (!email.value) {
        emailError.className = "show"
        emailError.style.color = "red"
        return
    }

    localStorage.setItem("name", name.value)
    localStorage.setItem("email", email.value)
    formContainer.className = "hide"
    startContainer.className = "show"
    // console.log("form submitted!")

}