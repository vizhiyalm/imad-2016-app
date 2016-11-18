 var express = require('express');
 var morgan = require('morgan');
 var path = require('path');
 
 var app = express();
 app.use(morgan('combined'));
 
 app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'index.html'));
 });
 
 app.get('ui/blog', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'blog.html'));
 });

app.get('/images/wisdomSchool.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, 'images', 'wisdomSchool.jpg'));
});


app.get('/images/anchorHospital.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, 'images', 'anchorHospital.jpg'));
});

app.get('/images/dashboard.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, 'images', 'dashboard.jpg'));
});

app.get('ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('ui/slideshow1.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'slideshow1.js'));
});

app.get('/ui/behance.png', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'behance.png'));
 });	