export class Vector2D {
    /**
     * @type { number }
     */
    x

    /**
     * @type { number }
     */
    y

    /**
     * @param { number } x
     * @param { number } y
     */
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    /**
     * @param { Vector2D } v1
     * @param { Vector2D } v2
     */
    add(v1, v2) {
        return new Vector2D(v1.x + v2.x, v1.y + v2.y)
    }
}

