class Player {
  constructor(context, coords) {
    this.context = context
    this.coords = coords

    this.image = new Image()
    this.image.src = "../assets/mario.png"

    // how much the Y position changes each frame
    this.deltaY = 0
    this.jumping = false

    this.health = 2
  }

  jump() {
    if (!this.jumping) {
      this.jumping = true
      this.deltaY = -20
    }
  }

  collide() {
    this.health -= 1
    this.coords.height *= 0.5

    this.coords.y = this.context.canvas.height - this.coords.height
  }

  draw() {
    // this.context.fillStyle = "green"
    // this.context.fillRect(this.coords.x, this.coords.y, this.coords.width, this.coords.height)
    this.context.drawImage(this.image, this.coords.x, this.coords.y, this.coords.width, this.coords.height)
  }

  update() {
    if (this.jumping) {
      this.coords.y += this.deltaY
      // make some gravity???
      this.deltaY += 0.981

      // check if hit the floor
      if (this.coords.y + this.coords.height >= this.context.canvas.height) {
        this.jumping = false
        this.deltaY = 0
        // stop from going thru the floor
        this.coords.y = this.context.canvas.height - this.coords.height
      }
    }

  }
}