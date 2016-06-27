var app = require("../../server/server");
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

module.exports = function(Mongo) {

	Mongo.getAllInCategory = function(listType, cb) {

		MongoClient.connect("mongodb://localhost:27017/Lists",
				function(err, db) {

					if (!err) {

						var collection = db.collection(listType);
						collection.findAll({}, function(err, response) {

							if (err) {
								cb(true, err);
							} else {
								cb(false, response);
							}
							db.close();
						});
					} else {
						console.log("MONGO ERROR: " + err);
						cb(true, err);
					}
				});
	};

}
