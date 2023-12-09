function assert(condition, reasoning) {
  const message = `assertion failed: ${reasoning}`

  if (!condition) {
    alert(message)

    throw new Error(message)
  }
}

window.addEventListener("load", () => {
  console.log("Logic loaded")

  const $canvas = document.getElementById("canvas")

  assert($canvas !== null, "canvas element should exist")

  const context = $canvas.getContext("2d")

  console.log(context)
})
