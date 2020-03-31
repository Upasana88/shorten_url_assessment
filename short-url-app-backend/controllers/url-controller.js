const express = require('express');
const mongoose = require('mongoose');
const URL = mongoose.model('shortUrl');


var router = express.Router();

router.get('/', (req, res) => {
    res.json('sample text');
}); 

router.post('/', (req, res) => {
    insertRecord(req, res);
})

function insertRecord(req, res) {
    var url = new URL();
    url.shortForm = req.body.shortForm; 
    url.originalUrl = req.body.originalUrl; 
    url.collection.createIndex();
    url.save((error, doc) => {
        if (!error) {
            console.log('record inserted successfully')
            res.json({ shortForm : url.shortForm})
        } else {
            console.log('Error during record insertion: ', error);
            
        }
    });
}

router.post('/original_url', async (req, res) => {
    console.log(req.body);
    const urlObject = await URL.find({shortForm: req.body.shortForm}, );
    console.log(urlObject);
    if (urlObject.length > 0) {
        res.json({ originalUrl: urlObject[0].originalUrl  });
    } else {
        res.status('404').send({errorMessage: 'URL NotFound or Expired'})
    }
}); 

module.exports = router;