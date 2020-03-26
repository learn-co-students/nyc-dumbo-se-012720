

const adapter = new APIAdapter("http://localhost:3000")

/****************  DOM Elements ****************/
const lightSwitch = document.querySelector("#toggle-dark-mode")
const animalForm = document.querySelector("#animal-form")
const animalList = document.querySelector("#animal-list")

const controlledAnimalForm = new ControlledForm(animalForm)

controlledAnimalForm.onInput = () => {
  console.log(controlledAnimalForm.data)
}

controlledAnimalForm.onSubmit = () => {
  const newAnimal = controlledAnimalForm.data
  console.log(newAnimal)
  // adapter.createAnimal(newAnimal)
  //   .then(actualNewAnimal => {
  //     // pessimistic rendering => 
  //     // we are waiting for the response
  //     // before the user sees the new information

  //     // create a new instance of our card
  //     const card = new AnimalCard(actualNewAnimal)
  //     // render it on the page
  //     card.render()
  //   })
}

/**************** Event Listeners ****************/
lightSwitch.addEventListener("click", handleLightSwitchClick)
// animalForm.addEventListener("submit", handleFormSubmit)

/**************** Event Handlers ****************/
function handleLightSwitchClick() {
  document.body.classList.toggle("dark-mode")
}

// function handleFormSubmit(event) {
//   // always prevent the default action for submit events!
//   event.preventDefault()

//   // get the form input
//   const newAnimal = controlledAnimalForm.data
//   console.log(newAnimal)

//   // make a fetch request to save the animal on the sever
//   // POST /animals
//   // adapter.createAnimal(newAnimal)
//   //   .then(actualNewAnimal => {
//   //     // pessimistic rendering => 
//   //     // we are waiting for the response
//   //     // before the user sees the new information

//   //     // create a new instance of our card
//   //     const card = new AnimalCard(actualNewAnimal)
//   //     // render it on the page
//   //     card.render()
//   //   })

// }

/**************** Initial Fetch ****************/
// fetch("http://localhost:3000/animals")
//   .then(response => response.json())
adapter.getAnimals()
  .then(animalArray => {
    animalArray.forEach(animalObj => {
      // create a new instance of our card
      const card = new AnimalCard(animalObj)
      // render it on the page
      card.render()
    })
  })
