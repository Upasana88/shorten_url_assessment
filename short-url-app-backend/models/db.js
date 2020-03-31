const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/UrlDb', {useNewUrlParser: true}, (error) => {
    if (!error) {
        console.log('Mongo Connection Succeeded');
    } else {
        console.log('Error in DB connection: ', err );
    }
});

require('./short-url-schema.model');
