import { Router } from "./lib/router"

const router = new Router()

router.use(router.json)

router.get("/", (_req, res) => {
    res.writeHead(200, {
        'content-type': 'application/json',
        'accept': 'application/json'
    })
    .end(JSON.stringify({
        msg: "Hello World!"
    }))
})

export { router }
