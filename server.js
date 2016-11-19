 var express = require('express');
 var morgan = require('morgan');
 var path = require('path');
 
 var app = express();
 app.use(morgan('combined'));
 
 app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'index.html'));
 });

//  app.get('ui/style.css', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'style.css'));
//  }); 
 
app.use("/images", express.static(__dirname+'/images')); 

//   app.get('/ui/main.js', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'main.js'));
//  });

// app.get('/ui/wisdomSchool.jpg', function (req, res) {
//     res.sendFile(path.join(__dirname, 'ui', 'wisdomSchool.jpg'));
// });


// app.get('/ui/anchorHospital.jpg', function (req, res) {
//     res.sendFile(path.join(__dirname, 'ui', 'anchorHospital.jpg'));
// });

// app.get('/ui/dashboard.jpg', function (req, res) {
//     res.sendFile(path.join(__dirname, 'ui', 'dashboard.jpg'));
// });



// app.get('/ui/behance.png', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'behance.png'));
//  });
 
// app.get('/ui/logo.png', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'logo.png'));
//  });
 
 
 var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
