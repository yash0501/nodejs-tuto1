const fetch = require("node-fetch");

const api_key = "7ae0163480932e03af9c6ed4639d4192";
const url = `https://api.openweathermap.org/data/2.5/forecast?zip=247776,in&appid=${api_key}&units=metric`;

fetch(url).then((res)=>{
    return res.json();
}).then((res)=>{
    let str = "";
    for(let i=0;i<40;i++){
        str += res.list[i].main.temp + " ,";
    }
    console.log(str);
}).catch((err)=>{
    console.log(err);
})
//console.log("hello");