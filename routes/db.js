var express = require('express');
var router = express.Router();
var assert = require('assert');
var app = require('../app');

// get table by category
// if there isn't any category, return all the db table
// -> json
router.get('/',function(req, res){
    var db = app.db;
    var category = req.query.category;
    
    var table = '';
    var str_doc = '';

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
            str_doc = '{\n';
            str_doc += '"_id":"' + doc._id + '",\n';
            str_doc += '"name_en":"' + doc.name_en + '",\n';
            str_doc += '"name_heb":"' + doc.name_heb + '",\n';
            str_doc += '"category":"' + doc.category + '",\n';
            str_doc += '"clip_url":"' + doc.clip_url + '",\n';
            str_doc += '"pic_url":"' + doc.pic_url + '"\n},';
            table += str_doc + '\n';
        } else {
            res.send(table);
        }
        if (err != null) {
            console.log('error in findClips: \n'+err);
            db.close();
        }
    });

    
    
    
});

module.exports = router;