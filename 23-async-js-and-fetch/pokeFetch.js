// function sleep(time) {
//   const start = new Date()
//   while (new Date() - start < time) { }
// }

let myPokemon = null

console.log("BEFORE FETCH")
// make the network request and returns a promise
fetch("https://pokeapi.co/api/v2/pokemon/1/")
  // on the promise, call .then to get the actual response
  .then(function (response) {
    // the response has a body with a string for the json data, we need to parse it
    // calling .json also return a promise
    return response.json()
  })
  .then(function (data) {
    // on the promise from .json, we call .then to get the actual parsed JSON data
    // from here, we can use it in our code
    // console.log("IN FETCH")
    myPokemon = data
    console.log("IN Fetch", myPokemon)
  })

// console.log("AFTER FETCH")
console.log("AFTER Fetch", myPokemon)
