// var a = 10
// console.log(a)

// function foo(flag) {
//     console.log("HELLO WORLD", flag)
// }

// // foo()


// var carimg = document.getElementById("carimg")

// function changeCar2Img() {
//     console.log("changeCar2Img")
//     console.log("carimg", carimg.src)
//     carimg.src = "images/car2.jpg"

// }

// function changeCar1Img() {
//     console.log("changeCar1Img")
//     carimg.src = "images/car1.jpg"
// }





// function changeImg(event, elem) {
//     // console.log("changeImg", event, elem)
//     if (event === "in") {
//         elem.src = "images/car2.jpg"
//     } else {
//         elem.src = "images/car1.jpg"
//     }
// }


// function switcBulb(ele) {
//     var bulbImg = document.getElementById("bulbImg")
//     console.log("bulbImg", bulbImg.src)
//     if (bulbImg.src === "file:///C:/Users/Lab-01/Desktop/Sir%20Jaffar%20Weekend%20Batch%2011/SMIT-batch11-Weekend/JavaScript/class%2015/images/bulboff.png") {
//         bulbImg.src = "./images/bulbon.jpg"
//     } else {
//         bulbImg.src = "./images/bulboff.png"
//     }
// }


function fieldEvent(flag, elem) {
    if (flag == "focus") {
        console.log("hello focus", elem)
        elem.style.backgroundColor = "red"
        elem.style.color = "white"

    } else {
        console.log("hello blur", elem)
        elem.style.backgroundColor = "blue"

    }
}










