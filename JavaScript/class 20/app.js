// console.log("HELLO WORLD")

// function foo() {
//     console.log("HELLO WORLD!")
// }

// foo() //call function
// foo() //call function
// foo() //call function


// function add(){
//     var num1 = +prompt("Enter your number 1")
//     var num2 = +prompt("Enter your number 2")
//     console.log("addition" , num1 + num2 )
// }


// function add(num1, num2 = 0) {
//     console.log("addition", num1, num2)
//     console.log("addition", num1 + num2)
// }

// add(100, 1)

var a = 100


// function addFunc() {
//     return "Jaffar Aman"
// }

// // console.log(addFunc())

// // console.log(result, "result")


// var result = addFunc()
// console.log(result)





// var name = "Jaffar" //global scope


// function foo() {
//     var name2 = "Jaffar Aman" //local scope
// }




// var userName = "Jaffar Aman"

// function foo() {
//     var userName = "MEER"
//     console.log(" 1 userName", userName)
// }



// foo()
// // console.log("2 userName", userName)




function foo(ele, num1) {
    console.log("foo 1", ele, num1)
    ele.style.backgroundColor = "blue"
    ele.style.color = "white"
    ele.innerHTML = "CLICK ME!"
}


// var img = document.getElementById("img")

// function changeImg(eventName) {

//     if (eventName == "over") {
//         console.log("OVEr")
//         img.src = "./images/car2.jpg"
//     } else {
//         console.log("OUT")
//         img.src = "./images/car1.jpg"
//     }
// }




function getInputValue() {
    var inputField = document.getElementById("inputField")
    console.log("getInputValue", inputField.value)
}



function setInputValue() {
    var inputField = document.getElementById("inputField")
    inputField.value = "Meer"
}















