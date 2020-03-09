/**** debugging ****/
console.log('HELLO WORLD')
console.log('%cHELLO WORLD', 'color: red')

debugger

/**** data types ****/

/**** truthy/falsey values ****/

/**** pass by reference vs pass by value ****/

/**** arrays and objects ****/

/**** function definition vs invocation ****/
function sayHi(name) {
  // debugger
  console.log("hi " + name)
  return 10
}

// let a = sayHi()
let b = sayHi

// console.log(a) // 10