function sayHi(name) {
  return `hi ${name}`
}

// arrow fn
const sayHi = (name) => {
  return `hi ${name}`
}

// multi-line
const doubleAndAdd = (num1, num2) => {
  const firstNum = num1 + num2
  return firstNum * 2
}

// one-line
const sayHi = (name) => `hi ${name}` // sayHi("Nicky") => "hi Nicky"
const doubler = (num) => num * 2 // doubler(2) => 4

// multiple args
const doubleAndAdd = (num1, num2) => num1 + num2 * 2

// one arg
const doubler = num => num * 2

// useful for callbacks!
const arr = [1, 2, 3]

arr.map(function (num) {
  return num ** 2
})

arr.map(num => num ** 2)
