const express = require("express")
//import express from 'express';
//import ps from "./html/ps.js";
//import { exec } from "child_process"
const { exec } = require("child_process")
const { ps_code } = require("./html/ps")
//to excecute system specific commands , child processes
//
const app = express()



app.get("/" , (req,res) =>{
	res.sendFile(__dirname +"/html/docker.html")
})


app.get("/ps" ,(req,res)=>{
	ps_code(req , res)
}
//	res.sendFile(__dirname +"/html/ps.js")
)
	//	exec(" docker ps" , (err,stdout , stderr)=>{
	//	res.send("<pre>" + stdout + "</pre>");
//	})
//})
app.get("/runform" , (req,res) =>{
	res.sendFile(__dirname +"/html/rundocker.html")
})


app.get("/run" , (req,res)=>{
	const c_name=req.query.container_name;
	const c_image=req.query.container_image;

	console.log(req.query.c_name)
	console.log(c_name)
	res.write("Cname: "+ c_name +"Cimage:"+ c_image);
	cname = "docker run -dit --name "+ c_name + " "+ c_image;
	console.log(cname)
	exec(cname , (err , stdout , stderr)=>{
		res.write("<br /><pre>"+stdout+"</pre>");
		res.send();
	})
})
app.listen(3000 , () =>{ console.log("Container app tool started sucessfully..")})
