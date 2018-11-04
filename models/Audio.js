const mongoose = require('mongoose');
const { Schema } = mongoose;
const AudioModel = new Schema({
    date_created: { type: Date, default: Date.now() },
    audio: { type: Buffer, required: true }
});

module.exports = mongoose.model('Voices', AudioModel);