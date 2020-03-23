// Bronze Age OOJS
// function Animal(firstName, favSnacks) {
//   this.firstName = firstName
//   this.favSnacks = favSnacks
//   Animal.all.push(this)
// }

// instance method
// Animal.prototype.speak = function () {
//   console.log(`hi my name is ${this.firstName}`)
// }

// class variable
// Animal.all = []

// class method
// Animal.findByName = function () {
//   return Animal.all.find(animal => animal.firstName === name)
// }

// Modern OOJS
class Animal {
  // same as Animal.all = []
  // Ruby equivalent: @@all
  static all = []

  // Ruby equivalent: initialize
  constructor(firstName, favSnacks, species) {
    this.firstName = firstName
    this.favSnacks = favSnacks
    this.species = species
    Animal.all.push(this)
  }

  // Ruby equivalent: instance method
  speak() {
    console.log(`hi my name is ${this.firstName}`)
  }

  addFavSnack(snack) {
    this.favSnacks.push(snack)
  }

  // Ruby equivalent: class method
  static findByName(name) {
    return Animal.all.find(animal => animal.firstName === name)
  }
}

const dog = new Animal("fezzik", ['peanut butter', 'soccer balls'])
const cat = new Animal("garfield", ['lasagna', 'ennui'])