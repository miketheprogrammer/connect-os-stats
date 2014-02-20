var app = require('express')();

var stats = require('./index');

app.get('/stats', stats());

app.listen(3010);