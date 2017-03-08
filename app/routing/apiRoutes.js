var friends = require("../data/friends.js");

module.exports = function(app){

// at "/api/friends", display friends data in Json format
	app.get("/api/friends", function(req,res){
		res.json(friends);
	});
// at "/api/friends", add userData to friends array and compare which has the best comptability to the current user
	app.post("/api/friends", function(req,res){

//create an array with name and photo empty where the friend Difference is equal to 1000
	var bestMatch = {
		name : "",
		photo : "",
		friendDifference: 1000
		};
//assign variable userData to the data received after requesting from survey.html 
		var userData = req.body;
		var userScores = userData.scores;
		var totalDifference = 0; 
//double for loop to toggle through friends and the scores of each of the friends 
		for (var i = 0; i < friends.length; i++){
			console.log(friends[i]);
			totalDifference = 0; 
		
			for (var j = 0; j <friends[i].scores[j]; j++){
//calculate the total difference between friends 
				totalDifference = Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
//get the best match as a friend from data
			if (totalDifference <= bestMatch.friendDifference){
				bestMatch.name = friends[i].name;
				bestMatch.photo = friends[i].photo;
				bestMatch.friendDifference = totalDifference;
				}
			}
		}
		friends.push(userData);
		res.json(bestMatch);
	});
}

