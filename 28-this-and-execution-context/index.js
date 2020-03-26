function whatsThis() {
  console.log("THIS IS:", this)
}

function speak(greeting, arg2, arg3) {
  console.log(`${greeting} my name is ${this.firstName}`)
}

const doggo = {
  firstName: "fezzik",
  speak: speak
}

// doggo.speak() // `this` will be the doggo
// speak() // `this` will be the window



function sayFavSnacks() {
  // `this` will be the dog
  // console.log("OUSTIDE forEach, this:", this)
  // var self = this
  // this.favSnacks.forEach(
  //   function (snack) {
  //     // console.log("INSIDE forEach, this:", this)
  //     console.log(`${this.firstName} likes ${snack}`)
  //   }.bind(this)
  // )

  // Arrow fn: automatically binds `this`
  this.favSnacks.forEach(snack => {
    console.log(`${this.firstName} likes ${snack}`)
  })
}

// POJO -> Plain ol Javascript Object
// const dog = {
//   firstName: 'fezzik',
//   favSnacks: ['peanut butter', 'soccer balls'],
//   speak: speak,
//   sayFavSnacks: sayFavSnacks
// }

// const cat = {
//   firstName: 'garfield',
//   favSnacks: ['lasagna', 'ennui'],
//   speak: speak,
//   sayFavSnacks: sayFavSnacks
// }

// Prehistoric OOJS
// factory function
function createAnimal(firstName, favSnacks) {
  return {
    firstName: firstName,
    favSnacks: favSnacks,
    speak: speak
  }
}
// const dog = createAnimal("fezzik", ['peanut butter', 'soccer balls'])
// const cat = createAnimal("garfield", ['lasagna', 'ennui'])

// Bronze Age OOJS
// constructor function
// function Animal(firstName, favSnacks) {
//   this.firstName = firstName
//   this.favSnacks = favSnacks
//   this.speak = speak
// }

// Modern OOJS
// class keyword
class Animal {
  constructor(firstName, favSnacks) {
    this.firstName = firstName
    this.favSnacks = favSnacks

    // create an instance method for speak
    this.speak = speak
  }
}

const dog = new Animal("fezzik", ['peanut butter', 'soccer balls'])
const cat = new Animal("garfield", ['lasagna', 'ennui'])
