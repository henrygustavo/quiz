var express = require('express');
var app = express();
var path = require('path');

//CORS

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//------Register our ROUTERS

var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

//----------------

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname)+ '/index.html');
});

app.listen('9000');

console.log("here we go");