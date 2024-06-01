// console.log("hello world");


// console.log("HELLO WORLD 1")

// console.log("HELLO WORLD 2") //login request

// console.log("HELLO WORLD 3")



// function foo() {
//     console.log("HELLO WORLD FOO")
// }

// setTimeout(foo, 5000)

// sync  / ASYNC

function loginHandler() {
    console.log("login hello 3 ")
}


// console.log("hello 1")
// console.log("hello 2")


// //   loginHandler()
// setTimeout(loginHandler, 5000) //5sec wait

// // setTimeout(function () {
// //     console.log("HELLO 3 sec")
// // }, 3000) //5sec wait


// console.log("hello 4")





// var interval = setInterval(function () {
//     console.log("HELLO WORLD")
// }, 1000)

// function stop() {
//     console.log("stop()")
//     clearInterval(interval)
// }









var minHeading = document.getElementById("minHeading")
var secHeading = document.getElementById("secHeading")
var msecHeading = document.getElementById("msecHeading")
var interval;

var msec = 0
var sec = 0
var min = 0


function start() {
    msec++
    msecHeading.innerHTML = msec

    if (msec === 100) {
        sec++
        secHeading.innerHTML = sec
        msec = 0


    } else if (sec > 59) {
        min++
        minHeading.innerHTML = min
        sec = 0
    } else if (min > 59) {
        //hr condition
    }


}



function startWatch() {
    interval = setInterval(start, 10)
}


function resetWatch() {
    clearInterval(interval)
    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    msecHeading.innerHTML = "00"
    min = 0
    sec = 0
    msec = 0
}




function stopWatch() {
    clearInterval(interval)
}