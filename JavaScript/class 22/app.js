console.log("HELLO WORLD...")
// Topics
// childnodes => get child with junk artifacts
// children => get child without junk artifacts

// Parent to child

// firstElementChild
// lastElementChild
// firstChild
// lastChild


// Child to Child
// nextElementSibling
// previousElementSibling
// nextSibling
// previousSibling





// var para1 = document.getElementById("para1")
// var para2 = document.getElementById("para2")
// var para3 = document.getElementById("para3")

// console.log("para",
//     para1,
//     para2,
//     para3
// )


// var paras = document.getElementsByTagName("p")
// for (var i = 0; i < paras.length; i++) {
//     console.log(paras[i])
//     // odd
//     if (i % 2 !== 0) {
//         paras[i].style.color = "red"
//         paras[i].style.background = "black"
//     }
// }


// console.log("paras", paras[2])
// paras[2].style.color = "red"
// paras[2].style.background = "black"


// paras[4].style.color = "red"
// paras[4].style.background = "black"




// var abu = document.getElementById("parent")
// console.log("parent", abu)

// var childParas = abu.getElementsByTagName("p")
// console.log("childParas", childParas)


// // var paras = document.getElementsByTagName("p")
// // console.log("p", paras)

// The HTML DOM (Document Object Model)

// console.log(document.childNodes[1].childNodes[2].childNodes[1])
// var h1 = document.childNodes[1].childNodes[1]
// var h1 = document.children[0].children[1].children[0]
// console.log(h1)



// console.log("document", document.childNodes[1].childNodes)
// console.log("document", document.childNodes[1].children[1].children[0].style.color = "red")


// var pappa = document.getElementById("pappa")
// console.log(pappa.childNodes[1].nodeType)
// console.log("pappa", pappa.children[1])
// console.log("pappa" , pappa.firstChild)
// console.log("pappa" , pappa.firstElementChild)
// console.log("pappa" , pappa.lastElementChild)

// console.log(pappa.firstElementChild.nextElementSibling)


// var para1 = pappa.firstElementChild
// var para4 = pappa.lastElementChild

// console.log("para4" , para4.previousElementSibling.previousElementSibling.previousElementSibling)
// console.log(para1.nextElementSibling)
// console.log("para1", para1.nextElementSibling)
// console.log("para3", para3.)



// var child2 = document.getElementById("child2")
// console.log("child2" , child2.parentNode.nodeName)


// var paras = document.getElementsByTagName("p")
// console.log(paras.length)


// function showPass() {
//     var input = document.getElementById("input")
//     // input.placeholder = "enter your pass"

//     // var bool = input.hasAttribute("placeholder")
//     // console.log("bool", bool)
//     // var attrValue = input.getAttribute("placeholder")
//     // console.log("attrValue", attrValue)
//     // input.setAttribute("placeholder", "Enter password")

//     console.log(input.attributes)

// }





// var parent = document.getElementById("parent")

// var h1Element = document.createElement("h1")
// h1Element.innerHTML = "HELLO WORLD!"
// // h1Element.setAttribute("id", "h1")
// // h1Element.id = "h1"
// console.log(h1Element, "h1Element")

// parent.appendChild(h1Element)

var parent = document.getElementById("parent")

var h1Element = document.createElement("h1")
h1Element.innerHTML = "HELLO WORLD"
h1Element.style.color = "red"
console.log("h1Element", h1Element)

var pEle = document.createElement("p")
pEle.innerHTML = "saylani"
pEle.className = "mypara"
parent.appendChild(h1Element)
parent.appendChild(pEle)
