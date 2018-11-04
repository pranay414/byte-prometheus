const express = require('express');
const app = express();
//const db = require('./db');
var mongoose = require('mongoose');
var gridfs = require('gridfs-stream');
var fs = require('fs');

mongoose.connect('mongodb://prometheus:Prometheus123@ds021034.mlab.com:21034/prometheus', { useNewUrlParser: true })
    .then(() => { console.log('Connected to DB successfully.') })
    .catch((err) => { console.log(err) });
mongoose.Promise = global.Promise;
gridfs.mongo = mongoose.mongo;

var connection = mongoose.connection;
connection.once('open', () => {

    // Upload a file from loca file-system to MongoDB
    app.get('/api/file/upload', (req, res) => {

        var filename = req.query.filename;

        var writestream = gfs.createWriteStream({ filename: filename });
        fs.createReadStream(__dirname + "/uploads/" + filename).pipe(writestream);
        writestream.on('close', (file) => {
            res.send('Stored File: ' + file.filename);
        });
    });

    // Demo POST request
    app.post('/api/save', (req, res) => {
        console.log('Endpoint hit!');
        console.log(req.params);
        res.send('Hello');
    });
});


module.exports = app;