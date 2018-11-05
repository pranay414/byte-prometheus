const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true })
    .then(() => { console.log('Connected to MongoDB successfully.') })
    .catch((err) => console.log(err));

module.exports = mongoose;