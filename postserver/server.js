var http = require('http');

var fs = require('fs');

var url = require('url');

var qs = require('querystring');
//post服务器
var server = http.createServer(function(req,res){
	//console.log(req.url);
	var objurl = url.parse(req.url,true);
	//console.log(objurl);
	if(objurl.pathname == '/login.html'){
		var rs = fs.createReadStream('./login.html');
		rs.pipe(res);
		/*rs.on('data',function(data){
			console.log(data.toString());
			res.write(data.toString());
		});*/	
	}else if(objurl.pathname == '/login'){
		//console.log(objurl.method);
		//获取GET数据
		/*var username = objurl.query.user;
		var password = objurl.query.password;
		res.write('<h3>欢迎你！'+username+'</h3>');
		res.end();   //关闭资源
		*/

		//console.log(objurl.query);
		//获取POST数据
		req.on('data',function(data){
			var response = qs.parse(data.toString());
			var username = response.user;
			var password = response.password;
			res.write('<h3>欢迎你！'+username+'</h3>');
			res.end();
			//console.log(response);
			console.log(username+' '+password);
		});

		
	}
	
});


server.listen(8080,function(){
	console.log('http://127.0.0.1:8080/');
});