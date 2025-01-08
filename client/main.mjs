import { Rect } from "./src/lib/square.mjs"
import { Vector2D } from "./src/lib/vector.mjs"

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

/**
 * @param { import("./src/dto/objects").Obj[] } objects
 */
function update(objects) {
    clear_background("#ffffff")
    for (const object of objects) {
        object.draw(context)
        object.update()
    }
    requestAnimationFrame((_ts) => update(objects))
}

function main() {
    const objects = []
    const rect = new Rect(
        new Vector2D(10, 10),
        10, 10,
        "#00ff00"
    )
    objects.push(rect)

    update(objects)
}

main()
