class ControlledForm {
  constructor(form) {
    this.form = form
    this.data = {}

    this.getFormData()

    this.form.addEventListener("input", this.handleInput)
    this.form.addEventListener("submit", this.handleSubmit)
  }

  handleInput = e => {
    this.data[e.target.name] = e.target.value
    if (typeof this.onInput === "function") {
      this.onInput()
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.onSubmit()
  }

  getFormData() {
    for (let element of this.form.elements) {
      if (element.type !== "submit") {
        this.data[element.name] = element.value
      }
    }
  }
}