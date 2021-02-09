const express = require("express");
const app = express();

// adding Static files to app
app.use(express.static("public"));

// Routes
app.get("/", (req, res)=>{
    res.send("This is root route");
});
app.get("/login", (req, res)=>{
    res.send("This is Login Page");
})
// Subroutes to many places like www.google.com/r/any_random_string
app.get("/users/:username", (req, res)=>{
    res.render(`username.ejs`);
})

app.get("/product/:id", (req, res)=>{
    const product = req.params.id;
    res.render("products.ejs",{product: product});
})

app.get("/customers", (req, res)=>{
    const customer = [
        "Yash","Vaibhav","Utkarsh","Vasu","Dhruv","Vedant"
    ];
    res.render("customers.ejs",{customer});
})

app.get("*", (req, res)=>{
    res.send("Error 404!! Page Not Found");
})

// app listen
app.listen(3000, ()=>{
    console.log("App is running at port 3000");
})