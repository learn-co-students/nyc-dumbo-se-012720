/****************  DOM Elements ****************/
const lightSwitch = document.querySelector("#toggle-dark-mode")
const animalForm = document.querySelector("#animal-form")
const animalList = document.querySelector("#animal-list")

/**************** Event Listeners ****************/
lightSwitch.addEventListener("click", handleLightSwitchClick)
animalForm.addEventListener("submit", handleFormSubmit)
animalList.addEventListener("click", e => {
  if (e.target.dataset.action === "freeToTheWild") {
    const cardLi = e.target.closest(".card")
    const animalId = cardLi.dataset.id

    // optimistic rendering => before the response comes back, we showing the user the effect of removing
    // cardLi.remove()

    // DELETE /animals/:id
    fetch(`http://localhost:3000/animals/${animalId}`, {
      method: "DELETE"
    })
      .then(r => {
        console.log(r)
        return r.json()
      })
      .then(() => {
        // pessimistic rendering => wait for the response before updating the DOM
        cardLi.remove()
      })
  }

  if (e.target.dataset.action === "donate") {
    const cardLi = e.target.closest(".card")
    const donationCount = cardLi.querySelector(".donation-count")
    const newDonations = parseInt(donationCount.textContent) + 10
    const animalId = cardLi.dataset.id

    // PATCH /animals/:id
    // body: { donations: newDonations }
    fetch(`http://localhost:3000/animals/${animalId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", // how we are sending the data in the body
        "Accept": "application/json" // how we want the response formatted
      },
      body: JSON.stringify({ donations: newDonations })
    })

    // optimistic rendering
    donationCount.textContent = newDonations
  }
})

/**************** Event Handlers ****************/
function handleLightSwitchClick() {
  document.body.classList.toggle("dark-mode")
}

function handleFormSubmit(event) {
  // always prevent the default action for submit events!
  event.preventDefault()

  // get the form input
  const newAnimal = {
    name: event.target["name"].value,
    species_name: event.target["species_name"].value,
    image_url: event.target["image_url"].value,
    diet: event.target["diet"].value,
    description: event.target["description"].value,
    donations: 0
  }

  // make a fetch request to save the animal on the sever
  // POST /animals
  fetch("http://localhost:3000/animals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // how we are sending the data in the body
      "Accept": "application/json" // how we want the response formatted
    },
    body: JSON.stringify(newAnimal)
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw Error("Bad request")
      }
    })
    .then(actualNewAnimal => {
      // pessimistic rendering => 
      // we are waiting for the response
      // before the user sees the new information
      console.log(actualNewAnimal)
      // and then => slap on the DOM
      renderOneAnimal(actualNewAnimal)
    })
    .catch(error => alert(error))

}

/**************** Render Helpers ****************/
function renderOneAnimal(animalObj) {
  const cardLi = document.createElement('li')
  cardLi.className = "card"
  cardLi.dataset.id = animalObj.id

  cardLi.innerHTML = `
    <div class="image">
      <img src="${animalObj.image_url}" alt="${animalObj.name}">
      <button data-action="freeToTheWild" class="delete button">X</button>
    </div>
    <div class="content">
      <div class="name">${animalObj.name}</div>
      <div class="donations">
        $<span class="donation-count">${animalObj.donations}</span> Donated
      </div>
      <div class="description">${animalObj.description}</div>
      <div class="tags">
        <span>${animalObj.species_name}</span>
        <span class="${animalObj.diet}">${animalObj.diet}</span>
      </div>
    </div>
    <button data-action="donate" class="donate button">
      Donate $10
    </button>
  `

  animalList.append(cardLi)
}

function renderAllAnimals(animals) {
  animals.forEach(renderOneAnimal)
}

/**************** Initial Render ****************/
fetch("http://localhost:3000/animals")
  .then(response => response.json())
  .then(actualAnimalData => {
    renderAllAnimals(actualAnimalData)
  })

// When X event happens 
// Do Y fetch request 
// And slap Z on/off the DOM 
