var http = require('http');

var fs = require('fs');

var url = require('url');

//get服务器
var server = http.createServer(function(req,res){
	var objurl = url.parse(req.url,true);
	console.log(objurl);
	if(objurl.pathname == '/login.html'){
		var rs = fs.createReadStream('./login.html');
		rs.pipe(res);
		/*rs.on('data',function(data){
			console.log(data.toString());
			res.write(data.toString());
		});*/	
	}else if(objurl.pathname == '/login'){
		var username = objurl.query.user;
		var password = objurl.query.password;
		res.write('<h3>欢迎你！'+username+'</h3>');
		console.log(username+''+password);
	}
	
});


server.listen(8080,function(){
	console.log('http://127.0.0.1:8080/');
});