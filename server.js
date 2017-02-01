var express = require('express');
var app = express();
var fs = require('fs');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});

app.get('/user', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('user');
});

app.get('/logo.png', function(req, res) {

	// ejs render automatically looks in the views folder
	fileToLoad = fs.readFileSync("logo.png");
    res.writeHead(200, {'Content-Type':  'image/png' });
    res.end(fileToLoad, 'binary');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});