// Dependencies: path package
var path = require("path");

// Routing
module.exports = function(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // If no match found, default to home
    app.get(function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};