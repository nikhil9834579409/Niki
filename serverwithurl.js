var http = require('http');
var url = require('url');

http.createServer(function(req,res){
    console.log("req received");
    var url_parts = url.parse(req.url,true);
    console.log(url_parts);	     
    //console.log(url_parts.query);
    var cl = url_parts.query.color;
    //console.log(cl);
    res.write("<h1 style='color:"+cl+"'> Welcome to Node Server </h1>");
    res.end();	
}).listen(9000);

console.log("server started at 9000");
