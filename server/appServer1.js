var express = require('express');
var morgon = require('morgan');
var bodyparser = require('body-parser');
var mongojs = require('mongojs');
var app = express();

var db = mongojs('local', ['user']);

app.use(morgon('dev'));
app.use(bodyparser.json());

app.use(express.static('../dist/app1'));

app.post('/createUser', function (req, res) {
  console.log('create user');
  db.user.insert(req.body, function (err, data) {
    res.json(data);
  });
});
app.post('/loginUser', function (req, res) {
  console.log('login user');
  db.user.findOne({'un': req.body.username, 'pwd': req.body.pwd}, function (err, data) {
    res.json(data);
  });
});

app.listen(9000);
console.log('server running on PORT No:-', 9000);
