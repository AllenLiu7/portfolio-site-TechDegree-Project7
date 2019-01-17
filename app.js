const express = require("express");
const app = express();
const { projects } = require('./data/projects.json');
app.use('/static', express.static('public'));


app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render('index');
})

app.get("/about", (req, res) => {
    res.render('about');
})

app.get("/project", (req, res) => {
    res.render('project');
})

app.listen(3000, () => {
    console.log("server running on port 3000");
});