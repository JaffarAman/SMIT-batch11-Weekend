// find ,  findIndex , filter , map , forEach  => Arrays Method


// var arr = ["karachi", "lahore", "islamabad"]

// const findCity = arr.find((value, index) => {
//     // console.log("example", value, index)
//     // return false

//     if (value === "lahore") {
//         // return value
//         return true
//     }

// })


// console.log("findCity", findCity)


// Find Index
// {
//     name: "karachi"
// }
// var arr = [
//     { name: "karachi" },
//     { name: "lahore" },
//     { name: "islamabad" },
// ]

// const cityIndex = arr.findIndex((value, index) => {
//     console.log("value", value.name)
//     if (value.name == "islamabad") {
//         return true
//     }
// })
// console.log(cityIndex, "cityIndex")



// array map method

// var arr = [
//     { name: "karachi" },
//     { name: "lahore" },
//     { name: "islamabad" },
// ]

// var arr = [2, 4, 6, 8, 10]
// var tempArr = []
// for (var i = 0; i < arr.length; i++) {
//     tempArr.push(arr[i] * 2)

// }

// console.log(arr)
// console.log(tempArr)


// var arr = [2, 4, 6, 8, 10]
// var newArr = arr.map((value, index) => {
//     console.log(value)
//     return value
// })

// console.log("newArr", newArr)
// console.log("arr", arr)


// Filter Array
// Filter


// var arr = [8, 2, 4, 8, 6, 8, 8, 10]

// var filterValue = arr.filter((value, index) => {
//     console.log(value, index)
//     if (value == 8) {
//         return value
//     }
// })

// console.log("filterValue", filterValue)


// ForEach


// var arr = [
//     { name: "karachi" },
//     { name: "lahore" },
//     { name: "islamabad" },
// ]

// var arr = [1, 11, 113, 8, 2, 4, 8, 6, 8, 8, 10]
// var tempArr = []
// const value = arr.forEach((value, index) => {
//     console.log(value, index)
//     // arr[index] = value  * 2
//     if (value % 2 === 0) {
//         tempArr.push(value)
//     }
// })


// console.log("value", value)
// console.log("arr", arr)
// console.log("tempArr", tempArr)




// // Promises
// 1
// 2
// 3
// // 4 ==> login request
// 5
// 6
// 7
// 8
// 9


// Promise

const loginPromise = new Promise((resolve, reject) => {
    var requestLogin = false
    if (requestLogin) {
        resolve("Login successfully")
    } else {
        reject("something went wrong!")
    }



})
.then((success)=>console.log(success , "then"))
.catch((error)=> console.log(error , "catch"))



// console.log(loginPromise)





