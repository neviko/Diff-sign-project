var express = require('express');
var router = express.Router();
var assert = require('assert');
var app = require('../app');

// get table by category
// if there isn't any category, return all the db table
// -> list of json file
router.get('/',function(req, res){
    var db = app.db;
    var category = req.query.category;
    
    var table_list = [];

    // Get all the table
    if (category == undefined) {
        var colle = db.collection('clips').find();
    }
    // Get table by category
    else {
        var colle = db.collection('clips').find({"category":category});
    }
    
    colle.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            var json_doc = {};
            json_doc["_id"] = doc._id;
            json_doc["name_en"] = doc.name_en;
            json_doc["name_heb"] = doc.name_heb;
            json_doc["category"] = doc.category;
            json_doc["clip_url"] = doc.clip_url;
            json_doc["pic_url"] = doc.pic_url;
            table_list.push(json_doc);
        } else {
            res.send(table_list);
        }
        if (err != null) {
            console.log('error in db.js: \n'+err);
            db.close();
        }
    });

    
    
    
});

module.exports = router;