import { IncomingMessage, ServerResponse } from "node:http";

import { Methods } from "../dto/routes";

export function handler(req: IncomingMessage, res: ServerResponse<IncomingMessage> & { req: IncomingMessage; }) {
    const method = req.method as Methods
    switch(method){
        case "GET":
            
            res.statusCode = 200
            res.end("Hello World!")
            break
        default:
            res.statusCode = 405
            res.end("Method not allowed")
            break
    }
}

