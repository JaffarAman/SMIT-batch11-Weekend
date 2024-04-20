// console.log("hello world!")

// var userCity = prompt("enter your city...").toLowerCase()
// var cities = ["karachi", "lahore", "multan"]

// var flag = false


// for (var i = 0; i < cities.length; i++) {
//     if (cities[i] == userCity) {
//         console.log("user city exists")
//         flag = true
//         break
//     }
//     console.log(cities[i])
// }

// if (flag === false) {
//     console.log("user city not exist ")
// }


// var city = "  karachi  city"
// console.log(city.length)


// var city = "karachi"
// console.log(city.slice(0 , -1))


// var city = "karAchI"; //K arachi
// var city = prompt("enter city"); //K arachi

// var firstLetter = city[0].toUpperCase()
// var otherLetters = city.slice(1).toLowerCase()
// var cap  = firstLetter + otherLetters


// var cap  = city[0].toUpperCase()  + city.slice(1).toLowerCase()

// console.log("cap", cap)



// var str = "saylani mass it traning";
// var arr = str.split(" ")  //string to arr
// var tempArr = []

// for (var i = 0; i < arr.length; i++) {
//     // console.log(arr[i], "arr")
//     var cap = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()
//     // console.log(cap, "cap")
//     tempArr.push(cap)

// }

// console.log("arr", arr)
// var cap = tempArr.join(" ") //arr to str
// console.log("cap", cap)


// var para = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers"
// console.log(para.slice(0, 49), "para")

// for (var i = 0; i < para.length; i++) {
//     console.log(para.slice(i, i + 12))
//     if (para.slice(i, i + 12) === "World War II") {
//         console.log(para.slice(0, i) + "the Second World War" + para.slice(i + 12), "start copy")
//     }
// }


// var para = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy which contains with the weird applicability available only to poetry and myth the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his."
