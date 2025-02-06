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
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running this port:${PORT}`);
})