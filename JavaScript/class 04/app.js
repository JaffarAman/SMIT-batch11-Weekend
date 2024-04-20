// console.log("hello world")

// if => true
// else => false

// if( condition ){
//     // block of statements
// }else{

// }
// var stdGender = "female";

// if (true) {
//   console.log("STD ALLOW");
// } else {
//   console.log("not allow");
// }

// var userAge = +prompt("Enter your age");
// console.log(userAge);

// if (userAge === 18) {
//   console.log("Welcome");
// } else {
//   console.log("not allow");
// }

// // =
// // ==
// // ===

// var userAge = +prompt("Enter your age");

// if (userAge < 18) {
//   console.log("allow");
// } else {
//   console.log("not allows");
// }

// if(userAge <= 17){
//   console.log("allow")
// }else{
//   console.log("not allow")

// }

// if
// else
// ==
// >, <, <=, >=

// logical opt => gates

// && => end gate  => condition1 && condition2 => true && true => true
// && => end gate  => condition1 && condition2 => false && true => false

// AND *
// 0 * 0 =0
// 0 * 1 = 0
// 1 * 0 = 0
// 1 * 1 = 1

// OR +
// 0 + 0 =0
// 0 + 1 = 1
// 1 + 0 = 1
// 1 + 1 = 1

//  ||
// || => OR gates => condition1 || condition2 = > false || true => true
// || => OR gates => condition1 || condition2 = > false || false => false

// var userAge = +prompt("Enter your age");
// if (userAge >= 18 || userAge <= 40) {
//   alert("allow");
// } else {
//   console.log("not allow");
// }

// var stdAge = prompt("enter age");
// var stdGender = prompt("enter gender");
// if (
//   stdAge >= 18 && stdAge <= 40
//     // true  && false
//     &&   stdGender == "male" ||  stdGender == "female"
// ) {
//   console.log("allow");
// } else {
//   console.log("not allow");
// }

// var gender = "ma123123le";

// if (gender == "male" || gender == "female") {
//   console.log("ALLOw");
// } else {
//   console.log("not ALLOw");
// }

// ! => sign

// if (  ! false  ) {
//   console.log("allow");
// } else {
//   console.log("not allow");
// }

// var gender = 0;
// if (gender !== 0) {
//   console.log("allow");
// } else {
//   console.log("not allow");
// }

// if
// else

// if (gender == "male" || gender == "female") {
//   console.log("ALLOW");
// }

// if

// if (gender == "male") {
//   console.log("boys allow");
// } else if (gender === "female") {
//   console.log("girls allow");
// } else if (gender === "tiktoker") {
//   console.log("dance kr bhai tw");
// } else {
//   console.log("not allow");
// }

var secretNumber = 10;

var userNum = prompt("enter numer 1 to 10");

if (secretNumber == userNum) {
  console.log("win");
} else {
  console.log("loss");
}
