// var userAge = prompt("enter your age");

// gates
// && => cond1 && cond2
// || => cond1 || cond2

// if (userAge >= 18 || userAge <= 50) {
//   console.log("userAge ALLOW ", userAge);
// } else {
//   console.log("userAge not ALLOW ", userAge);
// }

// var num1 = +prompt("Enter num1");
// var num2 = +prompt("Enter num2");
// var opt = prompt("Enter opt");
// console.log("opt", opt);
// if (opt == "+") {
//   console.log("add", num1 + num2);
// } else if (opt == "-") {
//   console.log("sub", num1 - num2);
// } else if (opt == "*") {
//   console.log("mul", num1 * num2);
// } else if (opt == "/") {
//   console.log("DIV", num1 / num2);
// } else {
//   console.log("error invalid opt");
// }

// nested if

// var email = "jaffar@gmail.com";
// var pass = "smit";

// var userEmail = prompt("enter your email");
// var userPass = prompt("enter your password");

// // if (userEmail === email && userPass === pass) {
//   console.log("login");
// } else {
//   console.log("invalid email & password");
// }

// if (userEmail == email) {
//   if (userPass === pass) {
//     console.log("login");
//   } else {
//     console.log("password invalid");
//   }
// } else {
//   console.log("email not found!");
// }

// var fruit1 = "apple";
// var fruit2 = "mango";
// var fruit3 = "banana";

// Array =>  Data types
//             //    0         1        2          3
// var fruitArr = ["apple", "mango", "orange", "banana"];
// console.log(fruitArr);
// console.log(fruitArr[0]);
// console.log(fruitArr[1]);
// console.log(fruitArr[2]);
// console.log(fruitArr[3]);
// console.log(fruitArr[4]);

// var stdNames = ["Jaffar"];

// stdNames[1] = "Aman";
// stdNames[2] = "Aman";

// console.log(stdNames);

// var fruitArr = ["apple", "mango", "orange", "banana"];

// var numArr = [10, 20, 30, "number", true, null, undefined];

// var numArr = [10, 20, 30];

// numArr[2] = "100"
// console.log(numArr);

// var fruitArr = ["apple", "mango", "orange", "banana"];
// console.log(fruitArr.length)

// var fruits = ["apple", "mango", "banana", "karachi"];

// fruits[2] = "orange";

// pop, push == >last index
// fruits.pop(); //remove last index
// fruits.push("orange"); //add value last index

// shift , unshift =>first index
// fruits.shift(); //remove value first index
// fruits.unshift("oranage"); //add value first index

// pop push  = >last
// shift unshift => start

// console.log(fruits);

// length   1           2       3           4
// var fruits = ["apple", "mango", "orange", "banana", "karachi"];
// index    0         1         2           3
// slice

// var arrCopy = fruits.slice(3, 4);
// console.log("arrCopy", arrCopy);

// var arrCopy = fruits.slice(0, -2); //second last value
// console.log("arrCopy", arrCopy);

// var arrCopy = fruits.slice(2); //second last value
// console.log("arrCopy", arrCopy);

// splice
// var fruits = ["apple", "mango", "karachi", "orange", "banana"];
// fruits.splice(2, 0, "pakistan", "lahore");
// console.log("fruits", fruits);
