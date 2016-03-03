var express = require('express');

var app = express();

app.use('/assets',express.static(__dirname + '/public'));

var port =  process.env.PORT || 3000;

app.get('/', function (req, res, next) {
    console.log('Request URL: ' +  req.url);
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet/></head><body> <h1> Hello my love </h1> </body></html>');
    next();
});


app.get('/person/:id', function(req, res){
    res.send('<html><head></head><body> <h1> Person: '+ req.params.id + ' </h1> </body></html>');
});

app.get('/api', function(req, res){
    res.json({ firstname: 'Kola', lastname: 'Ade'});
});
app.listen(port);