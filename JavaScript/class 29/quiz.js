var questions = [
    {
        id: 1,
        question: "HTML stand for",
        options: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",

        },
        answer: "Hyper text markup Language"
    },
    {
        id: 2,
        question: "Which type of JavaScript Languages is",
        options: {
            a: "Object-Oriented ",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",

        },
        answer: "Object-Base"
    },
    {
        id: 3,
        question: "The 'function' and  'var' are known as:",
        options: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",

        },
        answer: "Declaration statements"
    }
    ,
    {
        id: 4,
        question: "who is the present president of pakistan",
        options: {
            a: "Arif Alvi",
            b: "Imran Khan",
            c: "Nawaz Sharif",
            d: "Zardari",

        },
        answer: "Arif Alvi"
    }
    ,
    {
        id: 5,
        question: "How many prayers in a day:",
        options: {
            a: "6",
            b: "5",
            c: "3",
            d: "none",

        },
        answer: "5"
    },
    {
        id: 6,
        question: "How many total surah in quran",
        options: {
            a: "113",
            b: "114",
            c: "112",
            d: "111",

        },
        answer: "114"
    },
    {
        id: 7,
        question: "The correct sequence of HTML tags for starting a webpage is",
        options: {
            a: "Head, Title, HTML, body",
            b: "HTML, Body, Title, Head",
            c: "HTML, Head, Title, Body",
            d: "HTML, Title , Head,  Body",

        },
        answer: "HTML, Head, Title, Body"
    }
]



// set user name or user email
var userName = document.getElementById("userName")
var userEmail = document.getElementById("userEmail")
userName.innerHTML = localStorage.getItem("name")
userEmail.innerHTML = localStorage.getItem("email")

var htmlQues = document.getElementById("htmlQues")
var htmlOptions = document.getElementById("htmlOptions")
var indexNum = 0
var nextQuesBtn = document.getElementById("nextQuesBtn")
var correctAnsCount = 0
var wrongAnsCount = 0

// counter
var currentCount = document.getElementById("currentCount")
var totalCount = document.getElementById("totalCount")
totalCount.innerHTML = questions.length

var resultontainer = document.getElementsByClassName("resultontainer")[0]
var correctAns = document.getElementById("correctAns")
var wrongAns = document.getElementById("wrongAns")





function startQuiz() {
    console.log("startQuiz", questions[indexNum].options)
    htmlQues.innerHTML = questions[indexNum].question

    htmlOptions.innerHTML = ""

    for (var key in questions[indexNum].options) {
        // console.log("key", key, questions[indexNum].options[key])
        var option = questions[indexNum].options[key]
        // console.log("key", key)
        htmlOptions.innerHTML += ` <li onclick="checkAnswer(this)" >${option}</li>`
        // htmlOptions.innerHTML += `<li onclick=checkAnswer("${key}",) >   ${option}    </li>`

    }

    // {
    //     a: "6",
    //     b: "5",
    //     c: "3",
    //     d: "none",

    // }


}

var quizContainer = document.getElementById("quizContainer")
function nextQues() {
    if (indexNum < questions.length - 1) {
        indexNum++
        currentCount.innerHTML++
        console.log("nextQues", indexNum)
        nextQuesBtn.className = "hide"
        startQuiz()
    } else {
        console.log("khatam tata bye bye")
        quizContainer.style.display = "none"
        resultontainer.className = "show"
        correctAns.innerHTML = correctAnsCount
        wrongAns.innerHTML = wrongAnsCount
    }
    console.log(correctAnsCount, "correctAnsCount")
    console.log(wrongAnsCount, "wrongAnsCount")
}


// function checkAnswer(ele) {
function checkAnswer(ele) {
    // 1st way
    // console.log("ele", ele.innerHTML)
    // console.log("check", ele.innerHTML === questions[indexNum].answer)
    // console.log("questions[indexNum]", questions[indexNum].answer)

    // 2nd way
    // console.log('key', key)
    // console.log(questions[indexNum].options[key] === questions[indexNum].answer)
    // console.log(questions[indexNum].options[key] === questions[indexNum].answer)
    // var isCheck = questions[indexNum].options[key] === questions[indexNum].answer

    var liOptions = htmlOptions.getElementsByTagName("li")
    var isCheck = ele.innerHTML === questions[indexNum].answer
    if (isCheck) {
        console.log("correct!")
        ele.className = "correctAns"
        correctAnsCount++
    } else {
        console.log(" Incorrect!")
        ele.className = "wrongAns"
        wrongAnsCount++
        for (var li of liOptions) {
            if (li.innerHTML === questions[indexNum].answer) {
                li.className = "correctAns"
            }
        }

    }

    // console.log("htmlOptions", htmlOptions.getElementsByTagName("li"))
    for (var li of liOptions) {
        console.log(li)
        li.style.pointerEvents = "none"
        li.style.cursor = "no-drop !important"
    }

    // show next Ques btn  the selection
    nextQuesBtn.className = "show"


// }


// function timer(){

// }