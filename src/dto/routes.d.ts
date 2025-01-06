import { IncomingMessage, ServerResponse } from "node:http"

export type Methods = "GET" | "POST" | "PUT" | "DELETE"

export type Middleware = (req: IncomingMessage, res: ServerResponse<IncomingMessage> & { req: IncomingMessage; }, next?: Middleware) => void

export type Route = {
    method: string
    path: RegExp
    handler: Middleware
}

export interface ExtendedRequest extends IncomingMessage {
    body?: any
    params?: any
    query?: any
}
