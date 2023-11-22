// Create web server and run it
// To run this script, start the server with the command:
// 		node comment.js
// and then load http://localhost:8080 in your browser.

// Load the http module to create an http server.
var http = require('http');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
	var name = query.name;
	var comment = query.comment;
	var fs = require('fs');
	fs.appendFile('comments.txt', name + ': ' + comment + '\n', function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	});
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("You sent: " + name + " " + comment + "\n");
});

// Listen on port 8000, IP defaults to