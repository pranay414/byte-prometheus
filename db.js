const mongoose = require('mongoose');

mongoose.connect('mongodb://prometheus:Prometheus123@ds021034.mlab.com:21034/prometheus', { useNewUrlParser: true })
    .then(() => { console.log('Connected to MongoDB successfully.') })
    .catch((err) => console.log(err));

module.exports = mongoose;