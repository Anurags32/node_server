import express from "express"
const app = express();
app.get("/", (req, res) => {
    // console.log(__dirname);
    // console.log(__filename);
    console.log(import.meta.dirname);
    console.log(import.meta.url);
    const __filename = new URL(import.meta.url).pathname;
    console.log(__filename);
    res.send("Hii Anurag Tiwari");
});
app.get("/second", (req, res) => { res.send("<h1>hello word<h1>") });
app.get('/profile/:usern', (req, res) => {
    console.log(req.params);
    res.send("this is profile page");
});
app.get('/multi/:username/article/:slug', (req, res) => {
    const formatedSlug = req.params.slug.replace(/-/g, " ");
    res.send(`<h1>Article ${req.params.username} by ${formatedSlug}</h1>`);
});
app.get("/product", (req, res) => {
    console.log(req.query);
    res.send(`<h1>${req.query.search} is Product Page</h1>`);
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running this port:${PORT}`);
})