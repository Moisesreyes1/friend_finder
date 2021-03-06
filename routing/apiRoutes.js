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
            points: 100
        };
        // Variable to hold user's survey answers
        var userAnswer = req.body;
        var userScore = userAnswer.score;
        // console.log (userAnswer);
        // Looop thru existing friends
        for (j = 0; j < friends.length; j++) {

        
            var totalScore = 0;

            // Loop thru the scores of friend's array
            for (i = 0; i < friends[j].score.length; i++) {
                totalScore += Math.abs(parseInt(userScore[i]) - parseInt(friends[j].score[i]));
                
               
            }
             // If statement to compare scores
            if (totalScore <= results.points) {
                results.name = friends[j].name;
                results.photo = friends[j].photo;
                results.points = totalScore;
                console.log(results);
            }
        }
        // Push user answers
        friends.push(userAnswer);

        // Respond results
        res.json(results);
    });
};