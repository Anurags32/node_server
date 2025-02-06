import express from "express"
import path from "path"

const app = express();
const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));
app.use(express.urlencoded({ extends: true }));
// app.get("/", (req, res) => {
//     console.log("home page")
//     res.send("this is home page");
// });
// app.get("/contact", (req, res) => {
//     console.log(req.query);
//     // res.send("boom first project");
//     res.redirect("/")
// });
app.post("/", (req, res) => {
    console.log(req.body);
    // res.send("boom first project");
    // res.redirect("/")
});
app.use((req, res) => {
    return req.status(404).send("Page not found");
})
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`listin this port = ${PORT}`);
});