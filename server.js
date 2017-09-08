// server.js

var express = require('express');
var app = express();
var path
app.use(express.static(__dirname + "/public"));


app.listen(8000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 8000);
});