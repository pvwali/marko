// require('marko/node-require').install();

var express = require('express');
var app = express();

app.get('/', require('./src/pages/home'));

app.listen(6080, function() {
  console.log('Listening on port 6080');
});
