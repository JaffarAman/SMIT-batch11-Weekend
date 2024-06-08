var stdArr = ["John Doe", 26, 28, "Web and App", "male", null, undefined]
// for of
// for (var val of stdArr) {
//     console.log("stdArr", val)
// }


// var obj = {
//     name: "John Doe",
//     age: 26,
//     id: 28,
//     courseName: "web and app",
//     gender: "male",
//     email: null,
//     result: undefined
// }

// console.log("obj", obj)

// for (var key in obj) {
//     console.log(key, obj[key])
// }

// delete obj.email

// var check = "gender" in obj
// console.log("check", check)
// console.log(obj.hasOwnProperty("name"))

// console.log("obj", obj["name"])
// console.log("obj", obj.age)

// console.log("stdArr", stdArr[0])




var std1 = {
    name: "John Doe",
    age: 26,
    id: 28,
    courseName: "web and app",
    gender: "male",
    email: null,
    result: undefined
}


var std2 = {
    name: "MEER",
    age: 26,
    id: 28,
    courseName: "web and app",
    gender: "male",
    email: null,
    result: undefined
}

var std3 = {
    name: "Ali",
    age: 26,
    id: 28,
    courseName: "web and app",
    gender: "male",
    email: null,
    result: undefined
}



// array

// var stdArr = [std1, std2, std3]
// console.log(stdArr)





// var firstName = "Jaffar";
// var lastName = "Aman";
// // var fullName = firstName + " " + lastName
// // var fullName = "My full name is " + " " + firstName + " "  + lastName
// var fullName =  `My Full Name is ${firstName} ${lastName} ` 

// console.log("fullName", fullName)

// var parent = document.getElementById("parent")

// var temp = "Hello class"
// parent.innerHTML = `<table  border>
//         <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Email</th>
//         </tr>
//         <tr>
//             <td>100</td>
//             <td>Jaffar Aman</td>
//             <td>23</td>
//             <td>jaffar@gmail.com</td>
//         </tr>
//     </table>`


// var userName= prompt("enter userName")
// var a = `my name is ${userName}` 
// console.log("userName"  ,a)


// var UI = `<table border>
//         <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Email</th>
//         </tr>
//         <tr>
//             <td>100</td>
//             <td>Jaffar Aman</td>
//             <td>23</td>
//             <td>jaffar@gmail.com</td>
//         </tr>
//     </table> `


// document.write(UI)



// var stdArr = [
//     {
//         id: 100,
//         name: "John Doe",
//         age: 26,
//         email: null,

//     },
//     {
//         id: 101,
//         name: "MEER",
//         age: 26,
//         email: null,

//     },
//     {
//         id: 102,
//         name: "Ali",
//         age: 26,
//         email: null,
//     },
//     {
//         id: 134,
//         name: "sufiyan",
//         age: 26,
//         email: null,
//     }
// ]

// var tbody = document.getElementById("tbody")

// for (var i = 0; i < stdArr.length; i++) {
//     var obj = stdArr[i]
//     console.log(obj, "stdArr obj")
//     tbody.innerHTML += `<tr>
//                     <td>  ${obj.id}  </td>
//                     <td> ${obj.name} </td>
//                     <td> ${obj.age} </td>
//                     <td> ${obj.email} </td>
//                     <td onclick="editRow(${i})" > <button>EDIT</button> </td>
//                 </tr>`

// }



// var std2 = {
//     firstName: "MEER",
//     lastName: "Bhai",
//     age: 26,
//     id: 28,
//     courseName: "web and app",
//     gender: "male",
//     email: null,
//     result: undefined,
//     getFullName: function () {
//         // return this.firstName + " "+ this.lastName
//         return `${this.firstName} ${this.lastName}`
//     }


// }


// var std2FullName = std2.getFullName()
// console.log("std2FullName", std2FullName)


// function Std(name, age, gender, email) {
//     this.stdName = name;
//     this.stdAge = age
//     this.gender = gender
//     this.email = email
//     this.getFullName = function () {
//         return this.stdName
//     }
// }

// var std1 = new Std("jaffar", 23, "male")
// var std100 = new Std("meer", 32, "male")


// console.log(std100, "std100")