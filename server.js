 var express = require('express');
 var morgan = require('morgan');
 var path = require('path');
 var Pool = require('pg').Pool;
 var app = express();
 app.use(morgan('combined'));
 
 var config = {
    user: 'vizhiyalm',
    database: 'vizhiyalm',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
      <head>
          <title>
              ${title}
          </title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="/ui/style.css" rel="stylesheet" />
      </head> 
      <body>
          <div class="container">
              <div>
                  <a href="/">Home</a>
              </div>
              
              <h3>
                  ${heading}
              </h3>
              <div>
                  ${date.toDateString()}
              </div>
              <div>
                ${content}
              </div>
             
              <!--<h4>Comments</h4>
              <div id="comment_form">
              </div>
              <div id="comments">
                <center>Loading comments...</center>
              </div>--->
          </div>
          <script type="text/javascript" src="/ui/article.js"></script>
      </body>
    </html>
    `;
    return htmlTemplate;
}
 
 app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'index.html'));
 });
 
 var pool = new Pool(config);

app.get('/article-db', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM article', function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result));
      }
   });
});

app.get('/articles/:articleName', function (req, res) {
  // SELECT * FROM article WHERE title = '\'; DELETE WHERE a = \'asdf'
  pool.query("SELECT * FROM article WHERE title = $1", [req.params.articleName], function (err, result) {
    if (err) {
        res.status(500).send(err.toString());
    } else {
        if (result.rows.length === 0) {
            res.status(404).send('Article not found');
        } else {
            var articleData = result.rows[0];
            res.send(createTemplate(articleData));
        }
    }
  });
});


function homeTemplate(){
    var htmlTemplate = `
    	
	<div id="blogPage">
	   
        <!-- <span class="ftr" id="cat">
                <a href="#" class="sel">Category</a>
                <a href="#" class="designTag">Tag</a>
                <a href="#" class="codeTag">Date</a>
        </span>  -->  
            <h3>My articles</h3>
        <div class="blog1">
            <center>Loading...</center>
            

        </div>
        
    </div>
    <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">

            `;

            
            for (var postID=posts.length-1; postID>=0; postID--){
                var title = posts[postID].post_title;
                var subtitle = posts[postID].post_subtitle;
                var author = posts[postID].post_author;
                var date = (posts[postID].post_date).toDateString();

                htmlTemplate = htmlTemplate + `

                 <div class="post-preview">
                            <a href="posts/${postID}">
                                <h2 class="post-title">
                                    ${title}
                                </h2>
                                <h3 class="post-subtitle">
                                    ${subtitle}
                                </h3>
                            </a>
                            <p class="post-meta">Posted by <a href="#">${author}</a> on ${date}</p>
                        </div>
                        <hr>
                `
            }

            htmlTemplate = htmlTemplate + `
            </div>
                </div>
            </div>
   return htmlTemplate;
};

 app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
 }); 
 
app.use("/images", express.static(__dirname+'/images')); 

 
 
 var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
