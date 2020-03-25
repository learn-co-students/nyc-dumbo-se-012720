// Fetches
function getAllBakes() {
  return fetch("http://localhost:3000/bakes")
    .then(r => r.json())
}

function getWinner() {
  return fetch("http://localhost:3000/bakes/winner")
    .then(r => r.json())
}

function createBake(newBake) {
  return fetch('http://localhost:3000/bakes', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBake),
  })
    .then(r => r.json())
}

function rateBake(bakeId, score) {
  return fetch(`http://localhost:3000/bakes/${bakeId}/ratings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 699a9ff1-88ca-4d77-a26e-e4bc31cfc261"
    },
    body: JSON.stringify({
      score: score
    })
  })
    .then(r => r.json())
}

// Event handlers
document.querySelector("#new-bake-form").addEventListener("submit", e => {
  e.preventDefault() // always do this with form submit events

  const newBake = {
    name: e.target.name.value,
    image_url: e.target.image_url.value,
    description: e.target.description.value
  }

  createBake(newBake)
    .then(actualNewBake => renderBakeSidebar(actualNewBake))

})

// When the user clicks the judge bakes button
document.querySelector("#judge-bake-button").addEventListener("click", () => {
  // make a fetch to /bakes/winner
  getWinner().then(winningBake => {
    // and add a class of `winner` to the list item in the `#bakes-container`
    const winnerLi = document.querySelector(`li.item[data-id='${winningBake.id}']`)
    winnerLi.classList.add("winner")
  })
})


// Initial fetch
getAllBakes()
  .then(bakes => {
    renderAllBakes(bakes)
    renderDetail(bakes[0])
  })

// Render helpers
function renderDetail(bake) {
  const detailDiv = document.querySelector("#detail")
  detailDiv.innerHTML = `
    <img src="${bake.image_url}" alt="${bake.name}">
    <h1>${bake.name}</h1>
    <p class="description">
    ${bake.description}
    </p>
    <form id="score-form" data-id="${bake.id}">
      <input value="${bake.score}" type="number" name="score" min="0" max="10" step="1">
      <input type="submit" value="Rate">
    </form>
  `

  detailDiv.querySelector("#score-form").addEventListener("submit", e => {
    e.preventDefault()
    const userScore = e.target.score.value

    rateBake(bake.id, userScore)
      .then(updatedBakeObj => {
        bake.score = updatedBakeObj.score
      })

  })
}

function renderBakeSidebar(bake) {
  const bakesContainer = document.querySelector("#bakes-container")

  const bakeLi = document.createElement("li")
  bakeLi.className = "item"
  bakeLi.dataset.id = bake.id
  bakeLi.textContent = bake.name

  // Nested Event Listener
  bakeLi.addEventListener("click", e => {
    // Closure!
    renderDetail(bake)
  })

  bakesContainer.append(bakeLi)
}

function renderAllBakes(bakes) {
  bakes.forEach(bake => renderBakeSidebar(bake))
}

