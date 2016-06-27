var app = require("../../server/server");


module.exports = function(Lists) {
	
	
	
Lists.getAllByCategory = function(req, cb){
	
	var Mongo = app.models.Mongo;
	
	Mongo.getAll(req.params.category, {}, function(err, response){
		
	
		
		cb({"error":err, "response": response});
	});
	
};

}
