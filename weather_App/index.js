const express = require("express")
const https = require("https")
// https module is used to send request from node to http server / api server
const app = express()

function mern(req,res){
//     res.write("Hi")
//    res.write("Hi")
//    res.write("Hi")
  
    const wurl = "https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=4569cb938c3140e7c727fe6b7b2efeb0"
    https.get(wurl , function(response){
        console.log(res.statusCode);
        response.on("data" , function(mydata){
            const wdata = JSON.parse(mydata);
            console.log(wdata); 
            const temperature = wdata.main.temp
            res.send("Current temperature is "+ temperature.toString())
            console.log(temperature)
        })
    });

   // res.send("Hii");
}
app.get("/" , mern);
app.listen(3000)