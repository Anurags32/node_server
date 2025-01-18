const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("anurag tiwari");
        res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`I AM LISTENING ON PORT= ${PORT}`);
});





// node --watch app.js isme jo --watch laga hai ye nodemon ko replcement hia version 18.11.0 se