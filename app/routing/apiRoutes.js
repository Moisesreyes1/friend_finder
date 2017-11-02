// Linking routes to the data source
var friends = require("../data/friends.js");

// Routing
module.exports = function(app) {
    // API GET request
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // API POST request
    app.post("/api/friends", function(req, res) {
        // To hold result
        var results = {
            name: "",
            photo: "",
            points: 0
        };
        // Variable to hold user's survey answers
        var userAnswer = req.body;
        var userScore = userAnswer.scores;
        var totalScore = 0;

        // Loop thru the scores of friend's array
        for (i = 0; i < friends.scores; i++) {
            totalScore += Math.abs(parseInt(userScore[i]) - parseInt(friends[i].scores));
            
            // If statement to compare scores
            if (totalScore <= results.points) {
                results.name = friends.name;
                results.photo = friends.photo;
                results.points = totalScore;
            }
        }

        // Push user answers
        friends.push(userAnswer);

        // Respond results
        res.json(results);
    });
};