// data (props)
// render (DOM)
// event handling
class AnimalCard {
  constructor(animal) {
    this.animal = animal
  }

  handleDelete = () => {
    adapter.deleteAnimal(this.animal.id)
      .then(() => {
        this.element.remove()
        alert(`u deleted ${this.animal.name}`)
      })
  }

  handleDonate = () => {
    // update the information about the animal locally
    this.animal.donations += 10
    // update the DOM
    const donationCount = this.element.querySelector(".donation-count")
    donationCount.textContent = this.animal.donations
    const updatedData = { donations: this.animal.donations }

    // update the information about the animal on the server
    adapter.updateAnimal(this.animal.id, updatedData)
  }

  render() {
    this.element = document.createElement('li')
    this.element.className = "card"
    this.element.dataset.id = this.animal.id

    this.element.innerHTML = `
      <div class="image">
        <img src="${this.animal.image_url}" alt="${this.animal.name}">
        <button data-action="freeToTheWild" class="delete button">X</button>
      </div>
      <div class="content">
        <div class="name">${this.animal.name}</div>
        <div class="donations">
          $<span class="donation-count">${this.animal.donations}</span> Donated
        </div>
        <div class="description">${this.animal.description}</div>
        <div class="tags">
          <span>${this.animal.species_name}</span>
          <span class="${this.animal.diet}">${this.animal.diet}</span>
        </div>
      </div>
      <button data-action="donate" class="donate button">
        Donate $10
      </button>
    `

    const deleteButton = this.element.querySelector(".delete")
    deleteButton.addEventListener("click", this.handleDelete)

    const donateButton = this.element.querySelector(".donate")
    donateButton.addEventListener("click", this.handleDonate)

    animalList.append(this.element)
  }
}