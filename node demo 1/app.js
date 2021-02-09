const express = require('express');
const app = express();

// Root route
app.get("/",(req, res)=>{
    res.send("I am root");
});
// /login route
app.get("/login", (req, res)=>{
    res.send("Login Page Here");
});
// /sing route
app.get("/sing", (req, res)=>{
    res.send("I do not love you at all...");
});

app.listen(3000, ()=>{
    console.log("App is running");
})