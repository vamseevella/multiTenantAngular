var express = require('express');
var morgon = require('morgan');
var bodyparser = require('body-parser');
var mongojs = require('mongojs');
var jwt = require('jsonwebtoken');
var app = express();

var db = mongojs('local', ['user', 'personalInfo']);
app.set('secretKey', '12<345678ghhghg.#%@#^&*()~'); // secret variable

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
  console.log('login user', req.body);
  db.user.findOne({'username': req.body.username, 'pwd': req.body.pwd}, {'pwd': 0}, function (err, data) {
    if (data) {
      var token = jwt.sign(data, app.get('secretKey'), {
        expiresIn: 86400 // expires in 24 hours
      });
      var payload = data;
      payload.token = token;
      // return the information including token as JSON
      return res.json({
        success: true,
        message: 'Enjoy your token!',
        data: payload
      });
    }
    res.status(403).json({
      message: 'invalid credentials',
    });
  });
});

// route middleware to verify a token
app.use(function (req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('secretKey'), function (err, decoded) {
      if (err) {
        return res.json({success: false, message: 'Failed to authenticate token.'});
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
});

app.post('/CreatePersonalInfo', function (req, res) {
  console.log('CreatePersonalInfo');
  db.personalInfo.insert(req.body, function (err, data) {
    res.json(data);
  });
});

app.post('/GetPersonalInfo', function (req, res) {
  console.log('GetPersonalInfo');
  delete req.body.token;
  db.personalInfo.findOne({'userId': req.body.userId}, function (err, data) {
    res.json(data);
  });
});

app.listen(9000);
console.log('server running on PORT No:-', 9000);
