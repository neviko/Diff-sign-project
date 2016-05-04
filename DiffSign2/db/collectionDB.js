var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("we're connected!")
  // we're connected!
});

// define the schema
var clipsSchema = mongoose.Schema({
    name : String,
    path : String,
    type : String
});

// define the collection
var clips = mongoose.model('clips', clipsSchema);

var clip = new clips({
    name: 'nameTest',
    path: 'pathTest',
    type: 'typeTest'
});
console.log('Clip created, the name of the clip: '+clip.name);

// define a function for print the name
clipsSchema.methods.print_name = function () {
  console.log(this.name)
}

// save the clip to the DB
clip.save(function (err, clip) {
  if (err)
      return console.error(err);
  clip.print_name();
});

// querying
clips.find(function (err, clip) {
  if (err)
      return console.error(err);
  console.log(clip);
})