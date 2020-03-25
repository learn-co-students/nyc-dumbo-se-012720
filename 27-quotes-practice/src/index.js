// DOM Element
const quotesUl = document.querySelector("#quote-list")
const newQuote = document.querySelector("#new-quote-form")
const createQuote = document.querySelector("#new-quote")

function renderOneQuote(quoteObj) {
  console.log(quoteObj)
  // create one li for each of the quotes
  const quoteLi = document.createElement("li")
  quoteLi.className = 'quote-card'
  quoteLi.innerHTML = `
      <blockquote class="blockquote">
          <p class="mb-0">${quoteObj.quote}</p>
          <footer class="blockquote-footer">${quoteObj.author}</footer>
          <br>
          <button class='btn-success'>Likes: <span>${quoteObj.likes.length}</span></button>
          <button class='btn-danger'>Delete</button>
      </blockquote>
      `
  quotesUl.append(quoteLi)
}

function renderAllQuotes(quotes) {
  // once we have the array of quotes
  // console.log(quotes)
  quotes.forEach(renderOneQuote);
}

// Event Listeners
// function handleSubmit(e) {
// }
// newQuote.addEventListener("submit", handleSubmit)

newQuote.addEventListener("submit", e => {
  e.preventDefault()
  // get user input from the form
  console.log("quote:", e.target.quote.value)
  console.log("author:", e.target.author.value)
  const form = e.target
  const newQuoteAuthor = form.author.value
  const newQuoteQuote = form.quote.value

  const newQuoteObj = {
    quote: newQuoteQuote,
    author: newQuoteAuthor
  }

  // make POST request
  function postQuote(newData) {
    return fetch("http://localhost:3000/quotes", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newData)
    })
      .then(res => res.json())
  }
  postQuote(newQuoteObj).then(renderOneQuote)

  // update the DOM

})

// Fetch Data
function fetchQuotes() {
  return fetch("http://localhost:3000/quotes?_embed=likes")
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      renderAllQuotes(data)
    })
}

//Initialize & Render
fetchQuotes()
// .then(renderAllQuotes)