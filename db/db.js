var mongoose = require('mongoose')

exports.mongoose = (function () {
	return {
		db     : mongoose.createConnection('localhost', 'users'),
		Schema : mongoose.Schema
	}
})()