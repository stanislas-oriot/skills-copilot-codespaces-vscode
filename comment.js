// create web server
// 1. create web server
// 2. static web server
// 3. dynamic web server
// 4. database
// 5. MVC

// 1. create web server
// 1.1 import http module
var http = require('http');
// 1.2 create web server
var server = http.createServer();
// 1.3 listen request event
server.on('request',function(req,res){
    // 1.3.1 response
    res.write('hello');
    res.end();
});
// 1.4 listen port
server.listen(3000,function(){
    console.log('server is running...');
});