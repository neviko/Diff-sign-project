var express = require('express');
var router = express.Router();
var assert = require('assert');
var app = require('../app');

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
 
/**
 * Send an email when the contact from is submitted
 */
router.post('/', function(req, res) {
 
    var data = req.body;
 
    transporter.sendMail({
        from: data.contactEmail,
        to: 'elieraphm@gmail.com',
        subject: data.name,
        text: data.message
    });
 transporter.sendMail({
        from: 'elieraphm@gmail.com',
        to: data.contactEmail,
        subject: "שי פרויקט",
        text: '  ! הודעתך התקבלה ותטופל בקרוב. תודה על פנייתך'
    });
    res.end("OK");
});


module.exports = router;