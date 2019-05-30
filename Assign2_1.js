//var cookieParser = require('cookie-parser');
var exp = require('express');
var app = exp();

app.listen(9000,function(){
	console.log("Server is started at 9000");
});

//var app = exp();

//app.use(cookieParser());


/*app.get('/loginform',function(req,res){
	res.cookie('msgcookie',"previous login failed");
});
*/

app.get('/loginform',function(req,res){
	res.sendFile(__dirname+"/login.html");
});

app.get('/login',function(req,res){
	
	var userid = req.query.uid;
	var password = req.query.pwd
	
	if(userid == 'Ashish' && password == 'as')
	{
		res.write("\nUid: "+userid);
		res.write("\nPassword: "+password);
		res.end();
	}
	else
	{
		
		res.redirect("/loginform");
		//res.write("previous login failed");
		//res.end();
		//res.send(msgcookie);
	}
});	

