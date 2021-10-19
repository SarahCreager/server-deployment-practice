'use strict';

const express = require('express');
const app = express();

const repeat = require('./routes/repeat.js');
const talk = require('./routes/talk.js');
const log = require('./middleware/log.js');

// middleware that allows JSON objects to be attached to the request
app.use(express.json());
app.use(log);

// routes
app.post('/talk', talk);
app.get('/repeat', repeat);


module.exports = app;
