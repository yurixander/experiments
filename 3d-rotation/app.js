function assert(condition, reasoning) {
  const message = `assertion failed: ${reasoning}`

  if (!condition) {
    alert(message)

    throw new Error(message)
  }
}

function render(vertices) {
  const $canvas = document.getElementById("canvas")

  $canvas.innerHTML = ""

  for (const vertex of vertices) {
    const $vertex = document.createElement("div")

    $vertex.className = "vertex"
    $vertex.style.left = `${vertex.x}px`
    $vertex.style.top = `${vertex.y}px`
    $canvas.appendChild($vertex)
  }
}

window.addEventListener("load", () => {
  console.log("logic loaded")

  const vertices = []
  const WIDTH = 60
  const HEIGHT = 30
  const GAP = 20

  for (let x = 0; x < WIDTH; x++)
    for (let y = 0; y < HEIGHT; y++)
      vertices.push({
        x: x * GAP,
        y: y * GAP,
        z: 0
      })

  render(vertices)
})
