var express = require('express');
var app = express();
var path = require('path');
var config = require('./config');

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//------Register our ROUTERS

var apiRoutes = require('./app/api')(app, express);
app.use('/api', apiRoutes);
//----------------

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname)+ '/index.html');
});

app.listen(config.port);

console.log("here we go");