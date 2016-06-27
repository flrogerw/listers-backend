var app = require("../../server/server");
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

module.exports = function(Mongo) {
	
	
	
Mongo.getAllInCategory = function(collection, cb){
	
	MongoClient.connect("mongodb://localhost:27017/Lists", function(err, db) {
		if (!err) {
			var collection = db.collection(collection);
			collection.find({}, function(err, response) {
				db.close();
				if(err){
					cb({error: true, errorMessage: "Could not get Collection"});
				}else{
					cb({error: false, collection: response});
				}
			});
		}else{
			console.log("ERROR: "+err);
			cb({error: true, errorMessage: "Could not get Collection"});
		}
	});	
};	
	

}
