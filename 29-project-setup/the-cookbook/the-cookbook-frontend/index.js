document.querySelector("#create-recipe").addEventListener("submit", e => {
  e.preventDefault()

  const newRecipe = {
    name: e.target.name.value,
    image: e.target.image.value,
    description: e.target.description.value,
  }

  fetch("http://localhost:3000/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newRecipe)
  })
    .then(r => r.json())
    .then(renderOneRecipe)
})


function renderIngredients(ingredients) {
  return ingredients.map(ingredient => {
    return `<li>${ingredient.measurement} ${ingredient.name}</li>`
  }).join("")
}

function renderOneRecipe(recipe) {
  const recipeList = document.querySelector("#recipe-list")

  const recipeCard = document.createElement("div")
  recipeCard.className = "recipe-card"
  recipeCard.innerHTML = `
    <h2>${recipe.name}</h2>
    <img src="${recipe.image}" alt="${recipe.name}">
    <p>${recipe.description}</p>
    <ul>
      ${renderIngredients(recipe.ingredients)}
    </ul>
  `
  recipeList.append(recipeCard)
}

function renderAllRecipes(recipes) {
  recipes.forEach(renderOneRecipe)
}

fetch("http://localhost:3000/recipes")
  .then(r => r.json())
  .then(renderAllRecipes)