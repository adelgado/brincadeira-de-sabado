
var userStorage = require('../db/user.js').userStorage

exports.createForm = function(req, res){
	res.render('users/create', { title: 'Create User' })
},

exports.create = function(req, res) {
	var userInfo = {
		login : req.body.login,
		name : req.body.name,
		password : req.body.password
	}

	userStorage.save(userInfo, function(err, user) {
		if (err) {
			res.json({success:false, err:err})
		}

		res.json({success : true, user : user})
	})
}

exports.list = function(req, res) {
	userStorage.list(function(err, users) {
		if (err) {
			res.json({success : false, err : err })
		}

console.log(users)
		res.render('users/list', { users : users })
	})
}

