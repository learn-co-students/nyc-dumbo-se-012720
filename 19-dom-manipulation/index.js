// Read
const h1 = document.querySelector("#menu h1") // return the first element that matches a given css selector
const allLis = document.querySelectorAll(".cards") // returns a NodeList (array-like object) with ALL the elements that match a given CSS selector

// Update
h1.textContent = "Welcome to Zûkeeper" // sets the text content inside the opening and closing tags <h1>text content</h1>
h1.style.color = "purple" // sets the inline style attribute
h1.setAttribute("id", "header") // you can also use setAttribute to set ANY attribute of a DOM element

// Delete
// h1.remove()

// Create
// Strat 1: hand crafted, artisinal dom creation
// 1. find where it should go on the page
const animalListUl = document.getElementById("animal-list") // returns the first element with the given ID

// // 2. create the element
// const newPTag = document.createElement("p")

// // 3. set any attributes we want
// newPTag.id = "new-p"
// newPTag.className = "some-class"
// newPTag.textContent = "this is a text"

// // 4. append it to the parent element
// animalListUl.prepend(newPTag)

// // Strat 2: innerHTML = 
// animalListUl = `<li class="card">
//   <div class="image">
//     <img src="https://i1.wp.com/www.redpandanetwork.org/wp-content/uploads/2018/10/Photo-1-for-Give-page.png?fit=584%2C584&ssl=1" alt="Red Panda">
//   </div>
//   <div class="content">
//     <div class="name">Red Panda 1</div>
//     <div class="description">not actually a panda</div>
//   </div>
//   <button class="button donate-button" data-action="donate">
//     $<span class="donation-count">0</span> Donated
//   </button>
// </li>`

// Strat 3: Hybrid
function renderAnimal(animalObj) {

  const outerLi = document.createElement("li")

  outerLi.className = "card"

  outerLi.innerHTML = `
    <div class="image">
      <img src="${animalObj.imageUrl}" alt="${animalObj.name}">
    </div>
    <div class="content">
      <div class="name">${animalObj.name}</div>
      <div class="description">${animalObj.description}</div>
    </div>
    <button class="button donate-button" data-action="donate">
      $<span class="donation-count">${animalObj.donations}</span> Donated
    </button>
  `

  animalListUl.append(outerLi)
}

// TODO: put these on the page
const animalData = [
  {
    name: "Red Panda",
    imageUrl: "https://i1.wp.com/www.redpandanetwork.org/wp-content/uploads/2018/10/Photo-1-for-Give-page.png?fit=584%2C584&ssl=1",
    description: "not actually a panda",
    donations: 0
  },
  {
    name: "Pangolin",
    imageUrl: "https://i.pinimg.com/originals/bf/ff/93/bfff9395c6ae0d24534f030580924c7e.jpg",
    description: "The Pangolin, otherwise known as the scaly anteater, is the only mammal in the world to be covered from head to toe in keratin scales (the same as human finger nails).",
    donations: 0
  },
  {
    name: "Mantis Shrimp",
    imageUrl: "https://media.wired.com/photos/5bc7d05bf867c63ebba1b104/1:1/w_1800,h_1800,c_limit/mantisshrimp-467993194.jpg",
    description: "The mantis shrimp can punch with the speed of a .22 caliber bullet—strong enough to break the shells of its prey, as well as aquarium glass.",
    donations: 0
  },
  {
    name: "Mantis Shrimp",
    imageUrl: "https://media.wired.com/photos/5bc7d05bf867c63ebba1b104/1:1/w_1800,h_1800,c_limit/mantisshrimp-467993194.jpg",
    description: "The mantis shrimp can punch with the speed of a .22 caliber bullet—strong enough to break the shells of its prey, as well as aquarium glass.",
    donations: 0
  },
  {
    name: "Mantis Shrimp",
    imageUrl: "https://media.wired.com/photos/5bc7d05bf867c63ebba1b104/1:1/w_1800,h_1800,c_limit/mantisshrimp-467993194.jpg",
    description: "The mantis shrimp can punch with the speed of a .22 caliber bullet—strong enough to break the shells of its prey, as well as aquarium glass.",
    donations: 0
  },
  {
    name: "Mantis Shrimp",
    imageUrl: "https://media.wired.com/photos/5bc7d05bf867c63ebba1b104/1:1/w_1800,h_1800,c_limit/mantisshrimp-467993194.jpg",
    description: "The mantis shrimp can punch with the speed of a .22 caliber bullet—strong enough to break the shells of its prey, as well as aquarium glass.",
    donations: 0
  },
  {
    name: "Mantis Shrimp",
    imageUrl: "https://media.wired.com/photos/5bc7d05bf867c63ebba1b104/1:1/w_1800,h_1800,c_limit/mantisshrimp-467993194.jpg",
    description: "The mantis shrimp can punch with the speed of a .22 caliber bullet—strong enough to break the shells of its prey, as well as aquarium glass.",
    donations: 0
  }
]

// animalData.forEach(function (animalObj) {
//   renderAnimal(animalObj)
// })

animalData.forEach(renderAnimal)