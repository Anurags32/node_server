import express from "express"
const app = express();

app.get("/", (req, res) => { res.send("<h1>hello word<h1>") });
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running this port:${PORT}`);
})