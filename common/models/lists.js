var app = require("../../server/server");


module.exports = function(Lists) {
	
	
	
Lists.getAllByCategory = function(req, cb){
	
	var Mongo = app.models.Mongo;
	
	Mongo.getAll("Flashcard", {}, function(err, response){
		
		console.log("HERE: "+ response);
		
		cb(response);
	});
	
};

}
