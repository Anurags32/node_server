const http = require("http")
const server = http.createServer();
const PORT = 3000;
server.listen((req, res) => {
    if (req.url == "/") {
        res.write("anurag tiwari");
        res.end();
    }
});
server.listen(PORT, () => {
    console.log(`I AM LISTEN THIS PORT= ${PORT}`)
});