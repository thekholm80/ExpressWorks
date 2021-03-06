/*
WHAT'S IN QUERY
Exercise 7 of 8

Write a route that extracts data from query string in the GET '/search' URL
route, e.g. ?results=recent&include_tabs=true and then outputs it back to
the user in JSON format.
*/

var express = require("express");
var app = express();

app.get('/search', function(request, response) {
  response.send(request.query);
});

app.listen(Number(process.argv[2]));
