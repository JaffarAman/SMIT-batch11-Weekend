// console.log("HELLO WORLD...")


// Events
function greet(userName) {
    console.log("userName", userName)
    alert("HELLO CLASS.." + userName)
}

// greet()

// console.log(document)

function saveUserName() {
    // // Read -- GET Value
    // var userName = document.getElementById("userName")
    // console.log("userName", userName.value)

    // // Write -- Set  Value
    // var userName = document.getElementById("userName")
    // console.log("userName", userName.value)


    var userName = document.getElementById("userName")
    userName.value = "Jaffar Aman"

}



//calculator
function addValue(num) {
    var inputField = document.getElementById("inputField")
    // console.log(inputField, "inputField")
    inputField.value += num
}

function result() {
    var inputField = document.getElementById("inputField")
    inputField.value = eval(inputField.value)
}


function allClearValue() {
    var inputField = document.getElementById("inputField")
    inputField.value = ""
}


function singleClearValue() {
    var inputField = document.getElementById("inputField")
    inputField.value = inputField.value.slice(0, -1)
}



function getPara() {
    var para = document.getElementById("para")
    console.log("para", para.innerHTML)
}

function setPara() {
    var para = document.getElementById("para")
    para.innerHTML = "JAFFAR AMAN"
}