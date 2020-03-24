class Obstacle {
  constructor(context, coords) {
    this.context = context
    this.coords = coords

    // how much the X position changes each frame
    this.deltaX = -10
  }

  draw() {
    this.context.fillStyle = "red"
    this.context.fillRect(this.coords.x, this.coords.y, this.coords.width, this.coords.height)
  }

  update() {
    this.coords.x += this.deltaX
  }

  isOnScreen() {
    return this.coords.x + this.coords.width >= 0
  }
}