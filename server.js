// Dependencies packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Create express server
var app = express();

// Set initial port
var PORT = process.env.PORT || 8080;

//Parse app/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));

// Router
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});