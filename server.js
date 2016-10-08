var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artiOne', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artiOne.html'));
});

app.get('/artiTwo', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artiTwo.html'));
});

app.get('/artiThree', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artiThree.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
    res.send(counter.toString());
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
