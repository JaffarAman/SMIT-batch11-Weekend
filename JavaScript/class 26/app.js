// console.log("hello world");




// var arr = ["apple", "mango"]



// ()

// =
// ==

// var arr = ["karachi" , "lahore"]

// var obj = {
//     city: "karachi"
// }

// console.log("arr", typeof arr)







// name
// city
// age
// country


// var stdArr = ["Pakistan", "John", 28, "Karachi"]
// stdArr[4] = 1010
// stdArr[0] = "India"
// console.log("arr", stdArr)


// var stdObj = {
//     name: "John Doe",
//     age: 28,
//     city: "Karachi",
//     country: "Pakistan"
// }

// stdObj.id = 1010
// stdObj.country = "India"


// var check = "id" in stdObj
// console.log(check)


// delete stdObj.name

// console.log("obj", stdObj)

// console.log(stdObj.name ) // obj

// console.log(stdObj["country"]) //array notation




// var stdObj = {
//     name: "John Doe",
//     age: 28,
//     city: "Karachi",
//     country: "Pakistan"
// }

// stdObj["country"]

// for in
// for (var propName in stdObj) {
//     if (propName == "age") {
//         continue
//     }
//     console.log("propName", propName, stdObj[propName])
// }

// console.log(stdObj)




// var stdObj = {
//     name: "john",
//     name: "SAYLANI"
// }

// console.log(stdObj)




// var std = {
//     name: "Jaffar",
//     age: 23,
//     courses: ["HTML", "CSS", "JS"],
//     result: undefined,
//     email: null,
//     marks: {
//         html: 80,
//         Css: 60,
//         js: 70
//     }
// }
// console.log("mark js" , std.marks.js)
// console.log(std.name, "std")
// console.log(std.courses[2], "std")
// console.log(std.courses[1], "std")

var std = {
    name: "Jaffar",
    age: 23,
    courses: ["HTML", "CSS", "JS"],
    result: undefined,
    email: null,
    marks: {
        html: 80,
        Css: 60,
        js: 70
    },
    calcMarks: function (name) {
        var total = this.marks.html + this.marks.Css + this.marks.js
        console.log("name", name)
        this.result = total
        return total
    }

}
std.calcMarks("jaffar")
console.log(std)

// var stdTotalMarks = std.calcMarks()
// console.log("stdTotalMarks", stdTotalMarks)














