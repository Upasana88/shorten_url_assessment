require('./models/db');
const express = require('express');
const urlController = require('./controllers/url-controller');
const bodyParser = require('body-parser');
var cors = require('cors');
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
  });

var app = express();
app.use(cors());
app.use(limiter);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3010, () => {
    console.log('Express server started at port : 3010');
});

app.use('/url', urlController);