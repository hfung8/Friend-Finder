var path = require("path");

// at "/survey", display the survey.html page
module.exports = function(app){
	app.get("/survey", function(req,res){
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});
// if anything else is added as an endpoint, switch to home.html page
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });	
}