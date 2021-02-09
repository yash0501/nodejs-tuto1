const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("This is the HomePage");
});

app.get("/sports/:sport", (req, res)=>{
    if(req.params.sport=="soccer"){
        let game = req.params.sport;
        let newGame = game.charAt(0).toUpperCase() + game.slice(1);
        res.send(`${newGame} is awesome`);
    }
    else if(req.params.sport=="basketball"){
        let game = req.params.sport;
        let newGame = game.charAt(0).toUpperCase() + game.slice(1);
        res.send(`${newGame} is okay`);
    }
    else if(req.params.sport=="golf"){
        let game = req.params.sport;
        let newGame = game.charAt(0).toUpperCase() + game.slice(1);
        res.send(`${newGame} is boring`);
    }
});

app.get("/parrot/:sound/:count", (req, res)=>{
    let x = req.params.count; 
    let str = "";
    let play = req.params.sound + " ";
    while(x){
        str += play;
        x--;
    }   
    res.send(`${str}`);
});

app.get("*", (req, res)=>{
    res.send("404, Page Not Found");
})

app.listen(3000, ()=>{
    console.log("App is running at port 3000");
})