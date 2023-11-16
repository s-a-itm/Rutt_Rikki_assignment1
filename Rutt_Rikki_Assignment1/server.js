// Importing the Express.js framework 
const express = require('express');

// Create an instance of the Express application called "app"
// app will be used to define routes, handle requests, etc
const app = express();

//Require the querystring middleware
//Used to convert JacaScript into a URL query string
const qs = require('querystring');

// Monitor all requests regardless of their method (GET, POST, PUT, etc) and their path (URL)
//sends message to server console for troubleshooting and monitoing normal activity
app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});

/* Import data from a JSON file containing information about products
__dirname represents the directory of the current module (where server.js is located)
__dirname + "./products.json" specifies the location of products.json*/

//Route all othjer GET request to serve static files from a directory named "public"
app.use(express.static(__dirname + '/public'));

//start the server listen on port 8080 for incoming http requests
app.listen(8080, () => console.log(`listening on port 8080`));

const products = require(__dirname + "/products.json");

// Define a route for handling a GET request to a path that matches "./products.js"
app.get('./products.js', function(request, response, next) {
	// Send the response as JS
	response.type('.js');
	
	// Create a JS string (products_str) that contains data loaded from the products.json file
	// Convert the JS string into a JSON string and embed it within variable products
	const products_str = `let products = ${JSON.stringify(products)};`;
	
	// Send the string in response to the GET request
	response.send(products_str);
});

// Route all other GET requests to serve static files from a directory named "public"
app.use(express.static(__dirname + '/public'));

// Start the server; listen on port 8080 for incoming HTTP requests
app.listen(8080, () => console.log(`listening on port 8080`));