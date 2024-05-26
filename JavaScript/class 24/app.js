function addTodo() {
    var todoParent = document.getElementById("todoParent")
    // 1.get input
    var todoInput = document.getElementById("todoInput")
    if (todoInput.value.length < 3) {
        alert("Enter correct todo value")
        return
    }

    // console.log("todoInput", todoInput.value)

    // 2.create Li
    var li = document.createElement("li")
    // 3.set li value
    li.innerHTML = todoInput.value
    // console.log("li", li)

    // create Edit or delete btn
    var editBtn = document.createElement("button")
    editBtn.setAttribute("onclick", "editTodo(this)")
    editBtn.innerHTML = "EDIT"

    var deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "DELETE"
    deleteBtn.setAttribute("onClick", "delTodo(this)")
    // // deleteBtn.onClick = "delTodo()"
    // console.log("deleteBtn", deleteBtn)
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)


    todoParent.appendChild(li)
    todoInput.value = ""
}


function deleteAll() {
    var todoParent = document.getElementById("todoParent")
    console.log(todoParent.innerHTML)
    todoParent.innerHTML = ""
}

function delTodo(ele) {
    console.log("delTodo", ele.parentNode)

    ele.parentNode.remove()
}


function editTodo(ele) {
    // console.log("ele edit",
    //     ele.previousSibling.nodeValue = "HELLO WORLD"
    // )

    var editVal = prompt("Enter value", ele.previousSibling.nodeValue)
    console.log(editVal)
    ele.previousSibling.nodeValue = editVal

}



// if (age >= 20) {
//     console.log("welcome")
// }else{
//     console.log("not welcome")
// }


// switch(age){
//     case age >= 20
// }



// var age = 20
// switch (age) {
//     case 10:
//         alert("WELCOME")
//         break
//     case 15:
//         alert("WELCOME")
//         break
//     case "20":
//         alert("WELCOME")
//         break
//     case 25:
//         alert("WELCOME")
//         break
//     default:
//         alert("not welcome")

// }


// switch (age) {
//     case 20:
//         alert("WELCOME")
//         break
//     default:
//         alert("NOT WELCOME")
// }


// if (age === 20) {
//     alert("WELCOME")
// } else {
//     alert("NOT WELCOME")
// }




// var i = 0
// while (i >= 1) {
//     console.log(i)





//     i--
// }




// var i = 100
// do {
//     console.log(i)
//     i++
// }
// while (i <= 10)



// for(i ; i<10;i++){

// }





/*alert()
alert()
alert()
alert()
alert()
*/



// var h1 = document.getElementById("h1")
// console.log("h1" , h1.innerHTML)
// console.log("h1" , h1.innerText)








