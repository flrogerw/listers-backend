var app = require("../../server/server");
var ObjectID = require('mongodb').ObjectID;

module.exports = function(Lists) {

	Lists.getAllByCategory = function(req, cb) {

		var Mongo = app.models.Mongo;
		Mongo.get(req.params.category, req.body, function(err, response) {

			cb({
				"error" : err,
				"response" : response
			});
		});
	};

	Lists.getOneById = function(req, cb) {

		var Mongo = app.models.Mongo;	
		Mongo.get(req.params.category, {"_id" : new ObjectID(req.params.list_id)}, function(err, response) {

			cb({
				"error" : err,
				"response" : response
			});
		});
	};

}
