import { IncomingMessage, ServerResponse } from "node:http"

export type Methods = "GET" | "POST" | "PUT" | "DELETE"

export type ExtendedResponse = ServerResponse<IncomingMessage> & { req: IncomingMessage; }

export type Middleware = (req: ExtendedRequest, res: ExtendedResponse, next?: Middleware) => void

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
