var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
//setting middleware
app.use(express.static(__dirname )); //Serves resources from public folder
var serveIndex = require('serve-index');

app.use('/try', serveIndex(__dirname + '/try'));
var server = app.listen(process.env.PORT || 5000);
