 var express = require('express');
 var morgan = require('morgan');
 var path = require('path');
 
 var app = express();
 app.use(morgan('combined'));
 
 app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'index.html'));
 });
 
  app.get('/ui/main.js', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'main.js'));
 });

app.get('/ui/wisdomSchool.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'wisdomSchool.jpg'));
});


app.get('/ui/anchorHospital.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'anchorHospital.jpg'));
});

app.get('/ui/dashboard.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'dashboard.jpg'));
});

app.get('/ui/behance.png', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'behance.png'));
 });	