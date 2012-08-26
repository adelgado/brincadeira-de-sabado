var mongoose = require('./db.js').mongoose

var defaultValidation = {
	type     : String,
	required : true
}

var User = mongoose.db.model("User", mongoose.Schema(
			{ name     : defaultValidation
			, login    : defaultValidation
			, password : defaultValidation
			}
))


exports.userStorage = {
	save : function (user, callback) {
		(new User(user)).save(function(err, user) {
			callback(err, user)
		})
	},

	list : function(callback) {
		User.find(function(err, users) {
			callback(err, users)
		})
	}
}
