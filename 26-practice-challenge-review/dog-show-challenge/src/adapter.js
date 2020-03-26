const baseUrl = "http://localhost:3000/dogs"

function getAllDogs() {
  return fetch(baseUrl)
    .then(r => r.json())
}

function updateDog(id, updatedDog) {
  return fetch(baseUrl + `/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedDog)
  })
    .then(r => r.json())
}