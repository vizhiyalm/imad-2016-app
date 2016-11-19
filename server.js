 var express = require('express');
 var morgan = require('morgan');
 var path = require('path');
 
 var app = express();
 app.use(morgan('combined'));
 
 app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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

app.get('/ui/behance.png', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'behance.png'));
 });	