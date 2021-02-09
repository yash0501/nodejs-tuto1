// Fetch syntax start
//fetch("url").then(()=>{ // run first till no err

//}).then(()=>{  // run sec. till no err

//}).catch((err)=>{}); // run whenever any err occurs
// fetch syntax end

// Fetch code example

const fetch = require("node-fetch");

fetch("http://jsonplaceholder.typicode.com/users")
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res[0].name);
}).catch((err)=>{
    console.log(err);
})