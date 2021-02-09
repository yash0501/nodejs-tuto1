const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const books = [
    {title: "Nirmala", author: "Prem Chand"},
    {title: "Rashmirathi", author: "Dinkar"},
    {title: "Raja Yoga", author: "Swami Vivekananda"},
    {title: "Gunahon ka Devta", author: "Dharmaveer Bharti"}
];

app.get("/", (req, res)=>{
    res.render("index");
})

app.get("/books", (req, res)=>{
    res.render("books", {books});
})

app.post("/books", (req, res)=>{
    books.push(req.body);
    res.redirect("/books");
})

app.listen(3000, ()=>{
    console.log("App running at port 3000");
})