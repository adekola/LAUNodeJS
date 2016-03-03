var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/assets',express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

var port =  process.env.PORT || 3000;

var urlEncodedParser = bodyParser.urlencoded({ extended: false});

var jsonParser = bodyParser.json();

app.get('/', function (req, res, next) {
    res.render('index');
});


app.get('/person/:id', function(req, res){
    res.render('person', {ID: req.params.id, Qstr: req.query.qstr});    
});

//middleware body parser to be called before the request is processed
app.post('/person/', urlEncodedParser, function(req, res){
    res.send('Thank You');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personjson/', jsonParser, function(req, res){
    res.send('Thank You for the json data');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.get('/api', function(req, res){
    res.json({ firstname: 'Kola', lastname: 'Ade'});
});
app.listen(port);