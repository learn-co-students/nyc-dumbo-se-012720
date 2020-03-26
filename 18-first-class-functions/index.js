// /******* Hoisting *******/
// console.log(hi)
// var hi = "Randy"
// hi = "Randy"

// sayHi()

// function sayHi() {
//   hi = "wat"
// }

// function alsoSayHi() {
//   console.log(hi)
// }

// alsoSayHi()



// console.log(hi)

// sayHi("Randy")

// function sayHi(name) {
//   console.log("hi " + name)
//   return 10
// }


// /******* var, let, const, (global) *******/

// /******* Lexical Scoping *******/

// global scope
// let hi = "Nicky"

// function sayHi() {
//   // function scope
//   let beef = "outer"

//   if (true) {
//     // block scope
//     const pork = "yup"
//     console.log("in block", pork)
//   }

//   console.log("outside block", pork)

//   function insideFn() {
//     // nested fn scope
//     console.log(beef)
//   }

//   insideFn()

// }

// // console.log("BEFORE fn", hi)
// sayHi()
// console.log("AFTER fn", hi)

// /******* global vs function vs block scope *******/

// /******* scope in nested functions *******/











// /******* 1st Class Functions *******/
// 1. functions can be assigned to a variable

function makePie() {
  console.log("Here's a nice pie 🥧")
  // return
}

// const alsoSayPie = sayPie

// 2. functions can be passed around as arguments to other functions

// function fnCaller(callbackFn) {
//   callbackFn()
// }

// 1. sayPie() -> undefined
// 2. fnCaller(undefined)
// fnCaller(sayPie())

function calculateFinalPrice(taxCalculator, amount) {
  const taxes = taxCalculator(amount)

  return taxes + amount
}

function calculateNySalesTax(amount) {
  return amount * 0.0875
}

function calculateNjSalesTax(amount) {
  return amount * 0.0675
}

function calculateNyIncomeTax(amount) {
  // 500 lines of tax calculations
  return amount * 0.0675
}

// Example: Array methods
const arr = [1, 2, 3]

function logMePlusTwo(beef) {
  console.log(beef + 2)
}

// arr.forEach(function (beef) {
//   console.log(beef + 2)
// })

// arr.forEach(logMePlusTwo)

function myEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const el = array[i]
    callback(el)
  }
}

myEach(arr, logMePlusTwo)

// arr.forEach(logMePlusTwo()) // fn invocation returns undefined
// arr.forEach(undefined)


// 3. functions can be returned from functions
function multiplyBy2(num) {
  return num * 2
}
function multiplyBy2(num) {
  return num * 2
}
function multiplyBy3(num) {
  return num * 3
}

// Closure
function multiplyByX(x) {

  return function (num) {
    return num * x
  }
}