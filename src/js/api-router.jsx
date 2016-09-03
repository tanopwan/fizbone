import express from 'express';

var apiRouter = express.Router();

apiRouter.get('/', function(req, res) {
    res.send('Welcome to our Api!');
});

apiRouter.post("/user/login", userLogin);
apiRouter.post("/user/logout", userLogout);
apiRouter.post("/user/login/status", userLoginStatus);
apiRouter.post("/user/update", updateUser);

function updateUser(req, res) {
	console.log("updateUser: " + JSON.stringify(req.body));
	var response = JSON.parse(JSON.stringify(response_template));
	response.action = "updateUser";

	var userId = req.body.userId;
	var email = req.body.email;
	var mobile = req.body.mobile;
	var lineId = req.body.lineId;

	if (!userId) {
		response.code = 1;
		response.message = "Invalid userId";
		res.send(response);
	}
	User.updateUserByUserId(userId, email, mobile, lineId).then(function(result) {
		response.code = 0;
		response.message = "Success";
		response.object = result;
		res.send(response);
	}, function(error) {
		response.code = 2;
		response.message = "Error update user!";
		response.object = error;
		res.send(response);
	});
}

function userLogout(req, res) {
	console.log("user.js - userLogout: " + JSON.stringify(req.body));
	var userId = req.body.userId;

	User.updateUserOnLogout(userId).then( function(resolve) {
		res.send({ code:0, message: "success" });
	}, function(reject) {
		res.status(500).send({ code: 1100, message: "Cannot get userId" });
	});
}

function userLogin(req, res) {
	console.log("user.js - userLogin: " + JSON.stringify(req.body));
	var fbId = req.body.fbId;
	var username = req.body.username;

	if (fbId && username) {
		new Promise( function(resolve, reject) {
			User.updateUserOnLogin(fbId, username).then(resolve, reject);
		}).then( function(resolve) {
			User.getUserByFbId(fbId).then( function(resolve) {
				var userId = resolve[0].userId;
				var lastLogin = resolve[0].lastLogin;
				var email = resolve[0].email;
				var mobile = resolve[0].mobile;
				var lineId = resolve[0].lineId;
				var response = { code:0, message: "success", object: {fbId, username, userId, lastLogin, email, mobile, lineId} };
				console.log("user.js - updated user login: " + JSON.stringify(response));
				res.status(200).send(response);
			}, function(reject) {
				console.log(reject);
				res.status(500).send({ code: 1100, message: "Cannot get userId" });
			});

		}, function(reject) {
			res.status(500).send({ code: 1100, message: "updateUserOnLogin error" });
		})
	}
	else {
		res.status(400).send({ code: 1001, message: "Invalid parameters" });
		return;
	}
}

function userLoginStatus(req, res) {
	console.log("user.js - userLoginStatus: " + JSON.stringify(req.body));
	var fbId = req.body.fbId;
	var username = req.body.username;

	if (fbId && username) {
		User.validateFBUserSession(fbId, username).then( function(resolve) {
			var userId = resolve.userId;
			var lastLogin = resolve.lastLogin;
			var email = resolve.email;
			var mobile = resolve.mobile;
			var lineId = resolve.lineId;
			res.send({ code: 0, message: "success", object: {fbId, username, userId, lastLogin, email, mobile, lineId} });
		}, function(reject) {
			res.send({ code: 1, message: "User is not logged in" });
		});
	}
	else {
		res.status(400).send({ code: 1001, message: "Invalid parameters" });
	}
}

export default apiRouter;
