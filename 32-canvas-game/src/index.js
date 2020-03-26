const canvas = document.querySelector("#game")
const context = canvas.getContext("2d")

// event listeners
document.body.addEventListener("keypress", e => {
  if (e.keyCode === 32) {
    player.jump()
  }
})

// game state
const player = new Player(context, {
  x: 8,
  y: canvas.height - 120,
  width: 80,
  height: 120
})

let playing = false
let frameCounter = 0

let obstacles = []
let nextObstacleFrame = 60

function intersect(r1, r2) {
  return !(r2.x > r1.x + r1.width ||
    r2.x + r2.width < r1.x ||
    r2.y > r1.y + r1.height ||
    r2.y + r2.height < r1.y)
}

function drawGameOver() {
  context.font = "25px 'Press Start 2p'"
  context.textAlign = "center"
  context.fillText("U lose lol", canvas.width / 2, canvas.height / 2)
}

function createObstacle() {
  const obstacle = new Obstacle(context, {
    x: canvas.width,
    y: canvas.height - 40,
    width: 40,
    height: 40
  })
  obstacles.push(obstacle)
  let randomInterval = Math.floor(Math.random() * 30) + 60
  nextObstacleFrame += randomInterval
}

function loop() {
  frameCounter++
  if (frameCounter >= nextObstacleFrame) {
    createObstacle()
  }
  // clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height)

  // update state for any game objects
  player.update()
  player.draw()

  // draw our game objects
  obstacles.forEach(obstacle => {
    obstacle.update()
    obstacle.draw()

    if (intersect(player.coords, obstacle.coords)) {
      obstacle.coords.x = -obstacle.coords.width
      player.collide()
      if (player.health === 0) {
        stop()
        drawGameOver()
      }
    }
  })

  // clean up anything that we don't care about rendering
  obstacles = obstacles.filter(obstacle => obstacle.isOnScreen())

  if (playing) {
    requestAnimationFrame(loop)
  }
}

function start() {
  playing = true
  loop()
}

function stop() {
  playing = false
}

// initialize
start()
