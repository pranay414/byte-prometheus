const express = require('express');
const multer = require('multer');
var upload = multer();
const app = express();
const db = require('./db');
const Audio = require('./models/Audio');

app.post('/api/save', upload.any(), (req, res) => {
    const newAudio = new Audio();
    newAudio.audio = req.files[0].buffer;
    newAudio.save((err, audio) => {
        if (err) {
            return res.status(500).send('Error: saving audio.');
        }
        return res.status(200).send('Successfully save audio.');
    });
});



module.exports = app;