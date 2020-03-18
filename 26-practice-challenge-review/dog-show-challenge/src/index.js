document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const tableBody = document.querySelector("#table-body")
  const dogForm = document.querySelector("#dog-form")

  // Event Listener
  dogForm.addEventListener("submit", e => {
    e.preventDefault()
    // get the user input
    const updatedDog = {
      name: dogForm.name.value,
      breed: dogForm.breed.value,
      sex: dogForm.sex.value
    }

    // make fetch happen PATCH /dogs/:id
    const dogId = e.target.dataset.id
    updateDog(dogId, updatedDog)
      .then(actualUpdatedDog => {
        // find the tr associated with that dog
        const dogRow = document.querySelector(`tr[data-id='${dogId}']`)
        // update the innerHTML for that row
        dogRow.innerHTML = `
          <td>${actualUpdatedDog.name}</td>
          <td>${actualUpdatedDog.breed}</td>
          <td>${actualUpdatedDog.sex}</td>
          <td><button>Edit</button></td>
        `
      })

    // update the dog in the table
  })

  // Render Helpers
  function populateDogForm(dog) {
    // fill in the form with the dog values
    dogForm.name.value = dog.name
    dogForm.breed.value = dog.breed
    dogForm.sex.value = dog.sex
    // also give the form info about which dog we're editing
    dogForm.dataset.id = dog.id
  }

  function renderDogRow(dog) {
    const dogRow = document.createElement("tr")
    dogRow.dataset.id = dog.id
    dogRow.innerHTML = `
      <td>${dog.name}</td>
      <td>${dog.breed}</td>
      <td>${dog.sex}</td>
      <td><button>Edit</button></td>
    `

    // Nested Event Listeners
    const button = dogRow.querySelector("button")
    button.addEventListener("click", () => {
      populateDogForm(dog)
    })

    tableBody.append(dogRow)
  }

  function renderAllDogs(dogs) {
    dogs.forEach(renderDogRow)
  }

  // Initial Fetch & Render
  getAllDogs().then(renderAllDogs)
})
