var app = require("../../server/server");

module.exports = function(Lists) {
	
	
	
Lists.getAllByCategory = function(req, cb){
	
	var Mongo = app.models.Mongo;
	
	Mongo.getAllInCategory('Flashcard', function(err, response){
		
		cb(response);
	});
	
};

}