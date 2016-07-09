var app = require("../../server/server");
var ObjectID = require('mongodb').ObjectID;

module.exports = function(Lists) {

	Lists.getAllByCategory = function(req, cb) {

		var Mongo = app.models.Mongo;
		Mongo.get('datums', [req.body,{"meta":"1"}], function(err, response) {

			cb({
				"error" : err,
				"response" : response
			});
		});
	};

	Lists.getOneById = function(req, cb) {

		var Mongo = app.models.Mongo;	
		Mongo.get('datums', {"_id" : new ObjectID(req.params.list_id)}, function(err, response) {

			cb({
				"error" : err,
				"response" : response
			});
		});
	};
	
	Lists.insertDatum = function(req, cb) {

		var Mongo = app.models.Mongo;	
		Mongo.insert('datums', req.body, function(err, response) {

			cb({
				"error" : err,
				"response" : response
			});
		});
	};

}
