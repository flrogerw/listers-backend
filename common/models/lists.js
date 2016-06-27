var app = require("../../server/server");
var Mongo = app.models.Mongo;

module.exports = function(Lists) {
	
	
	
Lists.getAllByCategory = function(req, cb){
	
	
	
	Mongo.getAll(req.params.category, req.body, function(err, response){
				
		cb({"error":err, "response": response});
	});
	
};

}
