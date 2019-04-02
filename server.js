var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res){
    res.sendFile('index.html', { root: __dirname } );
});

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
});

app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))