const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const api_key = "d85d9e35";
let title = "";
const url = `http://www.omdbapi.com/?apikey=${api_key}&s=${title}`;
let info = [];
app.get("/movies",(req,res)=>{
   // if(title!==""){
        /*fetch(url)
        .then((data)=>{
            return data.json();
        })
        .then((data)=>{
            res.render("movies", {data});
        })
        .catch((err)=>{
            console.log(err);
        })*/
        if(info.length !== 0){
            console.log(info[0].Search[0]);
            res.render("movies", {info: info});
        }
        res.render("movies", {info: info});
   /* }
    else{
        
    }*/
})

app.post("/movies",(req,res)=>{
    let title = "";
    title += req.body.title;
    let url = `http://www.omdbapi.com/?apikey=${api_key}&s=${title}`;
    console.log(title);
    console.log(url);
    fetch(url)
        .then((data)=>{
            return data.json();
        })
        .then((data)=>{
            info.push(data);
            //console.log(data);
            //console.log(info[0].Search[0]);
        })
        .catch((err)=>{
            console.log(err);
        })
    title.length = 0;
    res.redirect("/movies");
})

app.listen(3000, ()=>{
    console.log("App listening at port 3000");
})