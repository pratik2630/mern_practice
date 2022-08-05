const { exec } = require("child_process")

function mern(err , stdout , stderr){
	console.log(stdout)
}

exec("cal",mern)
