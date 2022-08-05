const express = require("express")
const fs = require("fs");
const app = express()

function mern(){
console.log("data appended")
}


//fs.writeFile("lw.txt" , "hello Pratik\n",{ flag: 'a+' } ,mern);

function startServer(request , response){
console.log("Webserver started sucessfully .....")
//response.send("Hii")
}

function getRoot(request , response){

	response.send("<h1>This is root page</h1>"+request.ip)
	let data = "Client ip " + request.ip + "method "+ request.method + "\n"
	fs.writeFile("data.txt" , data , {flag:"a+"},mern)
	console.log("connected ip:"+ request.ip)

}

function getForm(request,response){
	response.sendFile(__dirname +"/form.html" )
}

function getFinal(request,response){
	let cdata = request.query.data
	response.send("U reaced to final"+cdata)
	

}
app.get("/",getRoot)
app.get("/form",getForm)
app.get("/final",getFinal)
app.listen(3000 , startServer)
