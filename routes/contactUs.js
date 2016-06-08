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
        from: "DiffSign Mailer",
        to: data.contactEmail,
        subject: "Your Message is Recieved",
        text: 'Thank you for contacting us, we will review your message soon'
    });
    res.end("OK");
});


module.exports = router;