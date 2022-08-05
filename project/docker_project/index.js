const express = require("express")

const { exec } = require("child_process")
//to excecute system specific commands , child processes
//
const app = express()


app.get("/runform" , (req,res) =>{
	res.sendFile(__dirname +"/rundocker.html")
})

app.get("/run" , (req,res)=>{
	const c_name=req.query.container_name;
	const c_image=req.query.container_image;

	console.log(req.query.c_name)
	console.log(c_name)
//	res.send("Cname: "+ c_name +"Cimage:"+ c_image);

	exec(c_name , (err , stdout , stderr)=>{
		res.send("<pre>" +stdout+"</pre>");
	})
})
app.listen(3000 , () =>{ console.log("Container app tool started sucessfully..")})
