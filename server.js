var express = require('express');
var path = require('path');
var sass = require('node-sass-middleware');
var app = express();

app.use(express.static(__dirname + '/scripts/'));
// app.use(express.static(__dirname + '/styles/'));

app.use(sass({
  src: path.join(__dirname + '/styles'),
  dest: path.join(__dirname + '/css'),
  debug: true
}));

app.use(express.static(__dirname + '/css/'));
app.use(express.static(__dirname + '/img/'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
