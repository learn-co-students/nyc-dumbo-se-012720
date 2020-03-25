/****************  DOM Elements ****************/
const lightSwitch = document.querySelector("#toggle-dark-mode")
const animalForm = document.querySelector("#animal-form")
const animalList = document.querySelector("#animal-list")

/**************** Event Listeners ****************/
lightSwitch.addEventListener("click", handleLightSwitchClick)
animalForm.addEventListener("submit", handleFormSubmit)

// Event Delegation
// 1. find the closest stable parent of elements we care about
animalList.addEventListener("click", e => {
  // 2. identify if the specific element we care about was clicked (some conditional logic)
  // (e.target.matches(".delete"))
  if (e.target.dataset.action === "freeToTheWild") {
    const card = e.target.closest(".card")
    card.remove()
  }

  if (e.target.dataset.action === "donate") {
    // find the place place on the page we're updating
    const card = e.target.closest(".card")
    const donationCount = card.querySelector(".donation-count")
    // update the DOM
    donationCount.textContent = parseInt(donationCount.textContent) + 10
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
    imageUrl: event.target["image_url"].value,
    description: event.target["description"].value,
    donations: 0
  }

  // slap on the DOM
  renderOneAnimal(newAnimal)
}

/**************** Render Helpers ****************/
function renderOneAnimal(animalObj) {
  const outerLi = document.createElement('li')
  outerLi.className = "card"
  outerLi.dataset.id = animalObj.id

  outerLi.innerHTML = `
    <div class="image">
      <img src="${animalObj.imageUrl}" alt="${animalObj.name}">
      <button data-action="freeToTheWild" class="delete button">X</button>
    </div>
    <div class="content">
      <div class="name">${animalObj.name}</div>
      <div class="donations">
        $<span class="donation-count">${animalObj.donations}</span> Donated
      </div>
      <div class="description">${animalObj.description}</div>
    </div>
    <button data-action="donate" class="donate button">
      Donate $10
    </button>
  `

  // Nested Event Listeners strategy
  // const deleteBtn = outerLi.querySelector(".delete")
  // deleteBtn.addEventListener('click', e => {
  //   outerLi.remove()
  // })

  // const donateBtn = outerLi.querySelector(".donate")
  // donateBtn.addEventListener('click', e => {
  //   // find the place place on the page we're updating
  //   const donationCount = outerLi.querySelector(".donation-count")
  //   // update the data
  //   animalObj.donations = animalObj.donations + 10
  //   // update the DOM
  //   // donationCount.textContent = parseInt(donationCount.textContent) + 10
  //   donationCount.textContent = animalObj.donations
  // })

  animalList.append(outerLi)
}

function renderAllAnimals(animals) {
  animals.forEach(renderOneAnimal)
}

/**************** Initial Render ****************/
// delete button
// const allDeleteButtons = document.querySelectorAll(".delete")
// allDeleteButtons.forEach(button => {
//   button.addEventListener('click', e => {
//     const card = e.target.closest(".card")
//     card.remove()
//   })
// })

renderAllAnimals(animalData)

// document.body.addEventListener('click', e => {
//   console.log("BODY", e.target)
// })

// document.querySelector(".card").addEventListener('click', e => {
//   console.log("CARD", e.target)
// })

// document.querySelector(".donate").addEventListener('click', e => {
//   console.log("BUTTON", e.target)
// })
