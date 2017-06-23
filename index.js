/**
 * Created by 27353 on 2017/6/22.
 */
var express = require('express');
var app = express();

var mobile = require('./routes/mobile');

app.use('/mobile',mobile);



app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});