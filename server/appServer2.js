var express = require('express');
var morgon = require('morgan');
var bodyparser = require('body-parser');
var mongojs = require('mongojs');

var app = express();

app.use(morgon('dev'));
app.use(bodyparser.json());

app.use(express.static('../dist/app2'));
app.listen(9001);
console.log('server running on PORT No:-', 9001);
