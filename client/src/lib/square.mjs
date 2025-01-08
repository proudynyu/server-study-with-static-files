import { Vector2D } from "./vector.mjs"

export class Rect {
    /**
     * @type { number }
     */
    #witdh

    /**
     * @type { number }
     */
    #heigth

    /**
     * @type { string }
     */
    #color

    /**
     * @type { Vector2D }
     */
    #position

    /**
     * @param { string } color
     * @param { number } width
     * @param { number } height
     * @param { Vector2D } position
     */
    constructor(position, width, height, color) {
        this.#witdh = width
        this.#heigth = height
        this.#color = color
        this.#position = position
    }

    /**
     * @param { CanvasRenderingContext2D } ctx
     */
    draw(ctx) {
        ctx.fillStyle = this.#color
        ctx.fillRect(
            this.#position.x,
            this.#position.y,
            this.#witdh,
            this.#heigth,
            this.#color
        )
    }

    update() {
        window.addEventListener("keydown", (event) => {
            const key = event.key

            switch (key) {
                case "d":
                    console.log("called d")
                    this.#position.x = this.#position.x + 1
                    break
                case "a":
                    this.#position.x = this.#position.x - 1
                    break
                default:
                    break
            }
        })
    }
}
