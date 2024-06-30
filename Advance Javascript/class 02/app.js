// var
// let
// const

// var fullName = "Jaffar Aman"
// let fullName = "Jaffar Aman"
// const fullName = "Jaffar Aman"


// var foo = "foo 1";

// var foo = "foo 2"


// let foo = "foo 1"
// // let foo = "foo 2"
// foo = "foo 2"


// console.log("fullName", foo)


// const fullName = "Jaffar Aman"
// // fullName = "sufiyan"
// const name;

// console.log("fullName", name)


// var = > function scope
// let, const => block scope


// var fullname = "Jaffar"

// function foo() {
//     fullname = "Jaffar Aman"
//     console.log(fullname)
// }


// console.log(fullname)
// foo()





// let fullname = "jaffar"

// function foo() {
//     fullname = "Jaffar Aman"
// }

// foo()
// console.log(fullname)



// Arrow function 

// function foo(num1, num2 = 10) {

//     return
// }

// foo(10, 30)




// const foo = () => {
//     console.log("HELLO WORLD")
// }

// foo()


// const foo = (num1, num2 = 20) => {
//     console.log("HELLO WORLD", num1, num2)
// }

// foo(20)

// const foo = num1 => {
//     console.log("HELLO WORLD", num1)
// }

// foo(20)

// const foo = _ => {
//     console.log("HELLO WORLD", num1)
// }

// foo(20)



// const  obj = {
//     first,
//     last,
//     age,
// };


// const calc = (num1, num2) => {
//     // const add = num1 + num2
//     return num1 + num2
// }

// const calc = (num1, num2) => num1 + num2
// const calc = (num1, num2) => `${{
// //     name: "Jaffar"
// // }}`
// const arr = () => [10, 20, 30]


// var result = calc(20, 50)

// console.log(result, "result")



// this


// function foo() {
//     console.log(this)
// }


// const obj = {
//     foo: function () {
//         console.log(this)
//     }
// }

// obj.foo()


// const foo = () => {
//     console.log(this)
// }

// // // foo()
// const obj = {
//     fisrtName: "jaffar",
//     foo: () => {
//         console.log(this.)
//     }
// }

// obj.foo()


// window.obj = obj





// const obj = {
//     firstName: "Jaffar",
//     lastName: "Aman"
// }



// const { lastName, firstName } = obj


// // let lastName = "jaffar"


// console.log(lastName)




// var arr = ["karachi", "lahore"]

// const [city2, city1, city3] = arr

// console.log(city1, city2, city3)



// Ternary opt => ``
// Spread Opt => (... Three dots)


// const arr1 = ["karachi", "Multan"]
// const arr2 = ["lahore"]

// const arr3 = [arr1 + arr2]


// ES5
// const arr3 = arr1.concat(arr2)

// const arr3 = [...arr1 , ...arr2]

// console.log(arr3)



const obj1 = {
    firstName: "jaffar"
}


const obj2 = {
    lastName: "aman"
}



// const obj3 = obj1  + obj2
// const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)



// find ,  findIndex , filter , map , forEach  => Arrays Method




// const value  = arr.find(   function(){}    )
// const arr = ["Karachi", "Lahore", "Multan", "Islamabad"]
// const value = arr.find((value, index, array) => {
//     if (value == "Lahore") {
//         // return true
//         return value
//     }
//     // console.log("value", value)
//     // console.log("index", index)
//     // console.log("array", array)

//     // console.log(value, index);

//     // if (value === "Multan") {
//     //     return true
//     // }
// })


// console.log("value", value)




const arr = ["Karachi", "Lahore", "Multan", "Islamabad"]
// find
// findIndex


var indexNum = arr.findIndex((value, index) => {
    // console.log(value, "value")
    if (value === "Lahore") {
        return true
    }
})
console.log("indexNum", indexNum)






