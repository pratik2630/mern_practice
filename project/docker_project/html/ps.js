const express = require("express")

const { exec } = require("child_process")
function ps_code(req,res){
exec("docker ps | tail -n +2", (err , stdout , stderr) =>{
		let a = stdout.split("\n");
		res.write("<table border='5' align='center' width='80%'>");
		res.write("<tr><th>Container ID</th>      <th>Image Name</th>  <th>Command</th>  <th>Container name</th>  </tr>")
			a.forEach((cdetails)=> {
				let cinfo = cdetails.trim().split(/\s+/)
			res.write("<tr>"+"<td>"+cinfo[0]+"</td>"+"<td>"+cinfo[1]+"</td>"+"<td>"+ cinfo[2]+"</td>"+"<td>"+cinfo[cinfo.length-1]+"</td>"+"</tr>")
		})
		res.write("</table>")
		res.send()
		//res.send("<pre>"+stdout+"</pre>")
	})
}

module.exports = {
	ps_code,
}
