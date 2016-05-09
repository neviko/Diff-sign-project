/**
 * Created by Sayag on 09/05/2016.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('russo the gay!');
});

app.listen(80, function () {
    console.log('Example app listening on port 3000!');
});