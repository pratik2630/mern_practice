const express = require("express");
const app = express() 


function startServer(){
    console.log("JS app at server started sucessfully.....")
}
let count = 1 ;
function getAbout(request , response){
    response.send("<h1>Welcome to <u>About Page</u></h1>")
    // response.send("HIi welcome")
   // response.send("response =" + response + " request ="+ request)
    console.log(count + " somebody came to about page")
    count++
}

function getHome(request , response) {
  //  response.send("<h1>Welcome to <u>Home- Page</u></h1>")
  response.sendFile(__dirname +"/home.html")
    console.log("dir name "+ __dirname);
}

function getData(request , response) {
    let myx = request.query.x;
    console.log("x =" + myx)
    response.send("Hey "+myx)
    
}


function getRoot(request , response) {
    response.send("<h1>Welcome to <u>Home Root</u> Page</h1>")
    
}

app.get("/" , getRoot)
app.get("/home" , getHome)
app.get("/about" , getAbout)
app.get("/data" , getData)

// This code is to start server
const port = 3000;
app.listen(port , startServer)