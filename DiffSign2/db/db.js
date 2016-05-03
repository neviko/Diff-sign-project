var mongoose = require('mongoose');
mongoose.connect('mongodb://diff:diff123@ds042138.mlab.com:42138/DiffSign_MongoDB');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});