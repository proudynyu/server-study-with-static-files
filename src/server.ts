import { Router } from "./lib/router"

const router = new Router()

router.use(router.json)

router.get("/", (_req, res) => {
    res.writeHead(200, { msg: "hello world" })
    res.end()
})

export { router }
