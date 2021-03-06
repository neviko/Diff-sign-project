var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

//get config json in order to connecting Mlab
var config = require('./config/config.json');
var db = config.db;
var mongoAddr = db.mongodb;
var mongoAddress = 'mongodb://' + db.user + ':' + db.password + mongoAddr.host + ':' + mongoAddr.port + '/' + db.db_name;

var routes = require('./routes/index');
var users = require('./routes/users');
var contactUs = require('./routes/contactUs');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/client')); //Static route for client side
app.use('/modules', express.static(__dirname + '/node_modules')); //Static Route for node_modules

//app.use('/', routes);
app.use('/users', users);
app.use('/get_table', require('./routes/db'));
app.use('/contact-us', contactUs);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// connect to Mlab
MongoClient.connect(mongoAddress, function(err, db) {
    assert.equal(null, err);
    console.log('Connected to Mlab!!!');
    exports.db = db;
});



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
