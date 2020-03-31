const mongoose = require('mongoose');

var urlSchema = new mongoose.Schema({
    shortForm: {
        type: String
    },
    originalUrl: {
        type: String
    },
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '5m' },
      },
});

urlSchema.path('shortForm').validate((value)=> {
    return value;
}, 'Short form could not be generated');
urlSchema.path('originalUrl').validate((value)=> {
    return value;
}, 'Url is required');

mongoose.model('shortUrl', urlSchema);