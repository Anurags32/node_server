
import { readFile } from 'fs/promises';
import { createServer } from 'http';
import crypto from 'crypto';
import path from 'path';

const server = createServer(async (req, res) => {
    if (req.method == 'GET') {
        if (req.url === '/') {
            try {
                const data = await readFile(path.join("public", "index.html"));
                res.writeHead(200, { 'Content-Type': "text/html" });
                res.end(data);
            } catch (error) {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("404 page not found")
            }
        }
    }
    if (req.method == 'POST' && req.url == '/shorten'){
        const body = "";
        req.on('data',(chunk)=>{
            body = body+chunk;

        });
        req.on("end",()=>{
            console.log(body);
            const {url,shortCode}= JSON.parse(body);
            if(!url){
                res.writeHead(400,{'Content-Type':"text/plain"});
                return res.end("URL is required");
            }
            const finalShortCode = shortCode || crypto.randomBytes(4).toString('hex');
        })
    }
})
server.listen(3000, () => {
    console.log("runing server");
});