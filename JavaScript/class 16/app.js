function changeImg(check, elem) {
    console.log("changeImg", check, elem)

    if (check == "over") {
        elem.src = "./images/car2.jpg"
    } else {
        elem.src = "./images/car1.jpg"
    }
}


function foo() {
    console.log("foo")
}


function inputFocus(inputField) {
    // console.log("inputFocus()", inputField)
    // inputField.style.color = "red"
    inputField.style.backgroundColor = "grey"

}

function inputBlur(inputField) {
    console.log("inputBlur()", inputField.value.length)
    // inputField.style.color = "black"
    if (inputField.value.length < 3) {
        inputField.style.backgroundColor = "red"
    } else {
        inputField.style.backgroundColor = "green"
    }
}


function getValue() {
    var para = document.getElementById("para")
    console.log("getValue", para.innerHTML)

}

// var name = "Jaffar"

// name = "Jaffar Aman"
// function setValue() {
//     var para = document.getElementById("para")
//     console.log("setValue")
//     para.innerHTML += "HELLO WORLD..."
// }



var paraLongText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sit eius dolor molestias incidunt velit aliquid dolore tempora? Ducimus delectus animi, vel obcaecati quisquam perferendis amet doloribus, quis iste harum ad quos libero odio molestias sint a. Alias assumenda quis deleniti accusamus dolore. Quaerat corporis reprehenderit nihil minima nam dicta?"

var paraShortText = "Lorem ipsum dolor sit amet consectetur adipisicing elit."



function seeMore(anchorElem) {
    var para = document.getElementById("para")
    if (anchorElem.innerHTML === "See More") {
        anchorElem.innerHTML = "SEE LESS"
        para.innerHTML = paraLongText
    } else {
        anchorElem.innerHTML = "See More"
        para.innerHTML = paraShortText
    }
}




function showPass(btnElem) {
    console.log("btnElem", btnElem.innerHTML)
    var password = document.getElementById("password")

    if (btnElem.innerHTML == "SHOW") {
        btnElem.innerHTML = "HIDE"
        password.type = "text"
    } else {
        btnElem.innerHTML = "SHOW"
        password.type = "password"
    }
}
