// Bronze Age OOJS
function Animal(firstName, favSnacks) {
  this.firstName = firstName
  this.favSnacks = favSnacks

  this.speak = function () {
    console.log(`hi my name is ${this.firstName}`)
  }
}

const dog = new Animal("fezzik", ['peanut butter', 'soccer balls'])
const cat = new Animal("garfield", ['lasagna', 'ennui'])