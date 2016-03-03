var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){ //primitive routing capabilities
    if(req.url === '/'){
        fs.createReadStream(__dirname + '/index.html').pipe(res);    
    }
    
    if(req.url === '/api'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            firstname: 'John',  
            lastname: 'Doe'
        }   
        res.end(JSON.stringify(obj));
    }
    else{
        res.writeHead(404);
        res.end("Don't know what you're talking about");
    }
    
}).listen(1337, '127.0.0.1');