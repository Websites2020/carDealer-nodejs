var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))