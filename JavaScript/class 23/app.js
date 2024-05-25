// var parent = document.getElementsByClassName("parent")
// // console.log("parent", parent[0].children)

// console.log("parent", parent[0].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling)
// // console.log("parent", parent[0].lastElementChild)

// var input = document.getElementById("input")
// var checkType = input.hasAttribute("type")
// console.log("checkType", checkType)

// if (checkType) {
//     console.log("attr value", input.getAttribute("type"))
// } else {
//     input.setAttribute("type", "passord")
// }


// input.placeholder = "Enter age"
// input.type = "password"
// // console.log("input", )

// var parent = document.getElementById("parent")
// var h1 = document.createElement("h1")
// h1.innerHTML = "HELLO WORLD"
// // console.log(h1)

// var input = document.createElement("input")
// input.setAttribute("placeholder", "enter name")

// parent.appendChild(h1)
// parent.appendChild(input)

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
    editBtn.innerHTML = "EDIT"

    var deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "DELETE"
    deleteBtn.setAttribute("onClick", "delTodo(this)")
    // // deleteBtn.onClick = "delTodo()"
    console.log("deleteBtn", deleteBtn)
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