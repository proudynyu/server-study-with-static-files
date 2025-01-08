const WIDTH = 800
const HEIGHT = 600

const canvas = document.querySelector("canvas")
if (!canvas) {
    throw new Error("Canvas was not founded")
}

canvas.width = WIDTH
canvas.height = HEIGHT

const context = canvas.getContext("2d")
if (!context) {
    throw new Error("Was not possible to get the Canvas Context")
}

/**
 * @param { string } color
 */
function clear_background(color) {
    context.fillStyle = color
    context.fillRect(0, 0, WIDTH, HEIGHT)
}

function update() {
}

function main() {
    clear_background("#ffffff")
}

main()
