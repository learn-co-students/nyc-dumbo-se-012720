function log(element, level) {
  let logString = "";
  logString += element.tagName ? element.tagName.toLowerCase() : ""
  logString += element.id ? "#" + element.id : ""
  logString += element.classList && element.classList.length ? "." + Array.from(element.classList).join(".") : ""
  console.log(`${"-".repeat(level)} ${logString}`)
}

// this is one way you could implement getElementById recursively
function getElementById(element, id, level = 0) {
  log(element, level)
  // base case, we found the element!
  if (element.id === id) return element

  // iterate over element's children
  for (let i = 0; i < element.children.length; i++) {
    const child = element.children[i]
    // recursive loop
    const foundNode = getElementById(child, id, level + 1)
    // check if the recursive fn call returns what we're looking for
    if (foundNode) return foundNode
  }

  return null
}

// usage
getElementById(document, "menu")