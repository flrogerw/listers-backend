/**
 * Main Routing Table
 * 2016-06-08
 * 
 */

module.exports = function(app) {
	
	var Token = app.models.Token;
	var Lists = app.models.Lists;
	/***** TOKEN ********/
	
	app.all(['/users','/users/*'], function(req, res, next){
	
		var token = req.headers.authorization || null;
		
		Token.verify(token, function( err, data ){
			
			if(err){
				res.send({error: true, errorMessage: data});
				res.end();
			}else{
				req.app.locals.user_id = data.userId;
				next();
			}
		});	
	});
	
	/*
	
	app.all(['/users/:user_id','/users/:user_id/*'], function(req, res, next){
		
		req.app.locals.user_id = req.params.user_id;
		next();
	});
	*/
	
	app.post('/lists/get_all/:category', function(req, res) {
		Lists.getAllByCategory(req, function(result) {
			res.send(result);
		});
	});
	
	app.post('/lists/get_one/:category/:list_id', function(req, res) {
		Lists.getOneById(req, function(result) {
			res.send(result);
		});
	});
	
	}