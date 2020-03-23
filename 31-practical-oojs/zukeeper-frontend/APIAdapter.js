class APIAdapter {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  getAnimals() {
    return fetch(this.baseUrl + '/animals')
      .then(r => r.json())
  }

  createAnimal(newAnimal) {
    return fetch(this.baseUrl + "/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // how we are sending the data in the body
        "Accept": "application/json" // how we want the response formatted
      },
      body: JSON.stringify(newAnimal)
    })
      .then(r => r.json())
  }

  deleteAnimal(id) {
    return fetch(this.baseUrl + `/animals/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
  }

  updateAnimal(id, updatedData) {
    return fetch(this.baseUrl + `/animals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(updatedData)
    })
      .then(r => r.json())
  }
}