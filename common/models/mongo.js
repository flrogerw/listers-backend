var app = require("../../server/server");
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

module.exports = function(Mongo) {

	Mongo.getAll = function(listType, filters, cb) {

		MongoClient.connect("mongodb://localhost:27017/Lists",function(err, db) {

					if (!err) {
						var response = [];
						var cursor =db.collection(listType).find( filters );
						
						 cursor.each(function(err, doc) {
						      assert.equal(err, null);
						      
						      if (doc != null) {
						    	  response.push(doc);
						      } else {
						         cb(false, response);
						      }
						 });
							db.close();
						}
					} else {
						console.log("MONGO ERROR: " + err);
						cb(true, err);
					}
				});
	};

}
