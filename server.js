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
    	<link href="/ui/style.css" rel="stylesheet"  />
    	<meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>

    <body>
    <div id="mainDiv">	
        <div>
                  
              </div>
    	<div class="left">
    	    <div class="innerleft">
        		<span class="propic"><img src="../images/propicl.png"></span>
        		<!--<h2>KAYALVIZHI</h2>
        		<h5>Chennai</h5>-->
        		
        		<div class="menu">
        			<ul>
        			
                    <li class="listPort"><a href="/" class="sel">Home</a></li>
                    <li class='listBlog'><a href="#blogPage">Blog</a></li>
                     <!--<li><a id="loginnavbar" data-target="#logintab" href="#">Login/Register</a>  </li> -->
                    </ul>
        		</div>
        		
        		<div class="link">
        				<a href="https://www.behance.net/vizhiyalm" target="_blank" class="bhc"><img src="images/behance.png"></a>
        				<a href="https://www.linkedin.com/" target="_blank" class="lkn"><img src="images/linkedin.png"></a>
        				<a href="https://twitter.com/" target="_blank" class="twr"><img src="images/twitter.png"></a>
        		</div>
    		</div>
    	</div>
    	
    	<div class="right">
    	    <div class="topic">
    	        <h3>My Blog</h3>
    	    </div>
    	    <hr>
    	    <div class="padleft">
    	        <div class="topic">
    	            <h3>${heading}</h3>
    	        </div>
    	        <div>
                  ${date.toDateString()}
                </div>
                <div>
                  ${content}
                </div>
    	        
    	    </div>
    	</div>
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




            
for (var articleID=article.length-1; articleID>=0; articleID--){
    var heading = article[articleID].article_heading;
    var subheading = article[articleID].article_subheading;
    var author = article[articleID].article_author;
    var date = (article[articleID].article_date).toDateString();
var blogPage = document.getElementById('blogPage');
    blogPage.innerHTML= `
     <div class="topic">
        	<h3>My Blog</h3>
        </div> 
        <hr>
        <div class="padleft">
    <div class="post-preview">
        <div> ${heading}</div>
        <div> ${subheading}</div>
                
        <p class="post-meta">Posted by <a href="#">${author}</a> on ${date}</p>
    </div>
    <hr>
    </div>
    `
}
           



 app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
 }); 
 
app.use("/images", express.static(__dirname+'/images')); 

 
 
 var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});