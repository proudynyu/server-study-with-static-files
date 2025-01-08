import path from "node:path";
import { promises } from "node:fs";

import { ExtendedRequest, ExtendedResponse } from "../dto/routes";
import config from "../config"

export async function serveStaticFiles(req: ExtendedRequest, res: ExtendedResponse) {
    const url = req.url ?? ""
    const publicFolder = path.resolve(process.cwd(), config.CLIENT_FOLDER)
    const filepath = path.join(publicFolder, url)

    const ext = path.extname(filepath)
    if (!ext) return

    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.mjs': 'application/javascript',
        '.cjs': 'application/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
    }[ext] || 'application/octet-stream';

    try {
        const fileContent = await promises.readFile(filepath)
        res.writeHead(200, { 'content-type': contentType })
        res.end(fileContent)
    } catch (err) {
        if (err.code === 'ENOENT') {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404: File Not Found');
        } else {
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500: Internal Server Error');
        }
    }
}
