var app = require("../../server/server");
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

module.exports = function(Mongo) {
	
MongoClient.connect("mongodb://localhost:27017/Lists", function(err, db) {
		if (!err) {
			var collection = db.collection('Orders');
			collection.findOne({
				"_id" : new ObjectID(orderId)
			}, function(err, item) {

				var order_string = JSON.parse(item.order_string);

				for (i in order_string.images) {

					convertImage(order_string.images[i]);
				}

				db.close();
			});
		}else{
			console.log(err);
		}
	});
}
