const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}))
//it by default take key valued string data
//extended: true is for all type of data

/*
app.post("/form" , function(req ,res){ 
//res.send("Hello");
//	res.send(req.body)
	const myn = req.body.n //to store value of n present in body
	res.send("Welcome to "+ myn)
	console.log(req.body)
}
)
*/

app.get("/data" , function(req,res){
	const myx = req.query.x;
	const myy = req.query.y;
	const myo = req.query.o;
//console.log(req.query)
	if (myo == "add"){

	let z = Number(myx)+ Number(myy);
	console.log(req.query)
	res.send("Sum :"+ z)
	}
	else if(myo == "mul"){
let z = Number(myx)* Number(myy);
        console.log(req.query)
        res.send("multiplication :"+ z)

	}
	else{
res.send("Not supported operation")
	}

})

app.get("/form" , function(req,res){
	res.sendFile(__dirname + "/myform.html"); 
	//__dirname for current directory
})
app.listen(3000);
