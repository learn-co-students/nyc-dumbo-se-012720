document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON) // single source of truth
  //YOUR CODE HERE
  // Render all the pokemon cards


  // 1.  Implement a flip functionality on each Pokemon.
  const pokeContainer = document.querySelector("#pokemon-container")


  // we need to trigger an event when the user types in the input field
  // 1. grab the input field element
  const searchInput = document.querySelector("#pokemon-search-input")
  // 2. add an event listener
  searchInput.addEventListener('input', e => {
    // 3. write a callback
    const userInput = searchInput.value

    // option 1 - use css to show/hide elements
    pokeContainer.querySelectorAll(".pokemon-card").forEach(card => {
      const pokeName = card.querySelector(".center-text").textContent

      if (pokeName.toLowerCase().match(userInput.toLowerCase())) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })

    // option 2 - filter the list and re-render
    // const filteredPokemon = POKEMON.filter(function (pokemon) { 
    //   return pokemon.name === userInput 
    // })
    // const filteredPokemon = POKEMON.filter(pokemon => pokemon.name.toLowerCase().match(userInput.toLowerCase()))
    // pokeContainer.innerHTML = ""
    // filteredPokemon.forEach(renderPokemon)
  })





  // Event Delegation
  // 1. find the closest stable parent of the elements we care about
  pokeContainer.addEventListener('click', e => {
    // 2. use conditional logic to determine if the element you care about was clicked
    if (e.target.dataset.action === 'flip') {
      const foundPoke = POKEMON.find(pokemon => pokemon.id === parseInt(e.target.dataset.id))
      if (foundPoke.sprites.front === e.target.src) {
        e.target.src = foundPoke.sprites.back
      } else {
        e.target.src = foundPoke.sprites.front
      }
    }
  })



  POKEMON.forEach(renderPokemon)

  function renderPokemon(pokeObj) {
    // 1. create the outermost element
    const pokeDiv = document.createElement("div")
    // 2. set any attributes
    pokeDiv.className = "pokemon-card"

    // 3. use innerHTML for child elements
    pokeDiv.innerHTML = `
      <div class="pokemon-frame">
        <h1 class="center-text">${pokeObj.name}</h1>
        <div class="pokemon-image">
          <img data-id="${pokeObj.id}" data-action="flip" class="toggle-sprite" src="${pokeObj.sprites.front}">
        </div>
      </div>
    `

    // 3a. append them to that parent element
    pokeContainer.append(pokeDiv)
  }

})
