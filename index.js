var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var encodedParser = bodyParser.urlencoded({extended: false});
app.set('view engine', 'ejs');
app.use(express.static('./app/public'));

require('./app/routes.js')(app);
app.listen(8888, function(){
    console.log('Server has started!');
});
