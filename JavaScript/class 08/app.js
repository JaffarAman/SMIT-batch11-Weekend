// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// for loop
// for(var  i= 0 ; i < arr.length ; i++){
//     console.log(arr[i])
// }

// var userCity = prompt("Enter your city!").toLowerCase()
// var cityCollection = ["karachi", "lahore", "multan"]
// var isMatch = false


// for (var i = 0; i < cityCollection.length; i++) {
//     if (cityCollection[i] === userCity) {
//         console.log("exist")
//         isMatch = true
//         break
//     }
// }
// console.log("ismatch", isMatch)

// if(isMatch === false){
//     console.log("not exist")
// }




// var userInput = prompt("Enter fruits")
// var fruits = ["apple", "orange", "mango"]
// var flag = false


// for (var i = 0; i < fruits.length; i++) {
//     if (fruits[i] === userInput) {
//         console.log("fruit exist")
//         flag = true
//         break
//     }
// }


// if (flag === false) {
//     console.log("not exists")
// }



// for (var i = 1; i <= 5; i++) {
//     console.log(i, "outer")

//     for (var j = 1; j <= 2; j++) {
//         console.log(j, "inner")
//     }
// }



// var arr = ["jaffar" , 20 , null , undefined , true]

var arr = [["apple", "mango"], ["banana", "orange"]]
// console.log(arr[1][0])

for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i])  //1["banana", "orange"]
    for(var j = 0 ; j < arr[i].length  ;j++   ){
        console.log(arr[i][j])
    }

}