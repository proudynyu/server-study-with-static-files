import { createServer } from "node:http"

import { ExtendedRequest, Middleware, Route } from "../dto/routes"
import { buildRoutePath } from "../utils/buildPath"
import { extractSearchParams } from "../utils/extractSearchParams"
import { Logger } from "./logger"

export class Router {
    private routes: Route[]
    private middlewares: Middleware[]

    constructor() {
        this.routes = []
        this.middlewares = []
    }

    use(middleware: Middleware) {
        this.middlewares.push(middleware)
    }

    handle(method: string, path: RegExp, handler: Middleware) {
        this.routes.push({ method, path, handler })
    }

    get(path: string, handler: Middleware) {
        this.handle('GET', buildRoutePath(path), handler)
    }

    post(path: string, handler: Middleware) {
        this.handle('POST', buildRoutePath(path), handler)
    }

    async json(req: ExtendedRequest): Promise<void> {
        if (req.method === "POST" || req.method === "PUT") {
            const chuncks = []
            for await (const chunck of req){
                chunck.push(chunck)
            }
            const parsed = JSON.parse(Buffer.concat(chuncks).toString())
            req.body = parsed
        }
    }

    listen(port: number, cb: () => void): void {
        const server = createServer(async (req, res) => {
            const customRequest = {...req} as ExtendedRequest

            // need to implement the resolution for the this.middlewares (like json())

            const route = this.routes.find((route) => {
                return route.method === req.method && route.path.test(req.url);
            });

            if (route) {
                const routeParams = req.url?.match(route.path)!
                const { query, ...params } = routeParams.groups!

                customRequest.params = { ...params }
                customRequest.query = extractSearchParams(query) ?? {}

                return route.handler(req, res);
            }

        })

        server.on("request", Logger.info)
        server.listen(port, cb)
    }
}
