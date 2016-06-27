var app = require("../../server/server");


module.exports = function(Lists) {
	
	var Mongo = app.models.Mongo;	
	
Lists.getAllByCategory = function(req, cb){
	
	
	
	Mongo.getAll(req.params.category, req.body, function(err, response){
				
		cb({"error":err, "response": response});
	});
	
};

}
