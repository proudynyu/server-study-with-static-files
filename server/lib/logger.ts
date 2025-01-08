import { IncomingMessage } from "http";

export class Logger {
    static info(req: IncomingMessage) {
        const method = req.method
        const time = new Date().toLocaleString("pt-br", {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        })
        console.log(`[${method}]: (${time}) -> ${req.url}`)
    }
}
