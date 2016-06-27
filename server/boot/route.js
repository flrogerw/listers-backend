/**
 * Main Routing Table
 * 2016-06-08
 * 
 */

module.exports = function(app) {
	
	
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
	
	/**
	 * @api {get} /users Get User
	 * @apiName GetUser
	 * @apiGroup User
	 * @apiDescription Returns a user's profile information.
	 * @apiPermission Logged In
	 *
	 * @apiHeader {string} Authorization Authorization token value.
	 * @apiParam {bigint} user_id Users unique ID.
	 *
	 * @apiSuccess {boolean} error Trigger to display generic error message.
	 * @apiSuccess {object} user User object.
	 * @apiSuccess {bigint} user.userId System Id of the User.
	 * @apiSuccess {string} user.email  Email Address of the User.
	 * @apiSuccess {string} user.name  Full name of the User.
	 * @apiSuccess {date} user.signupDate  Sign up date of the User.
	 * 
	 * @apiSuccessExample Success-Response:
	 *     {
     *        	"error": false,
     *			"user": {
     *  		"userId": "125161609992182",
     * 			"email": "bob@bob.com",
     * 			"name": "Bob G. Normal",
     *  		"signupDate": "2016-05-16T23:27:59.843Z"
     *			}
	 *		}
	 *
	 * @apiError UserNotFound User not found.
	 *
	 * @apiErrorExample Error-Response:
	 *     {
	 *       "error": true,
	 *       "errorMessage": "The id of the User was not found."
	 *     }
	 */	
	app.get('/users', function(req, res) {
		User.getUser(req, function(result) {
			res.send(result);
		});
	});
	
	}