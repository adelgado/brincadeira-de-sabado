
exports.index = require('./routes/index.js').index

exports.users = {
	list       : require('./routes/user.js').list,
	createForm : require('./routes/user.js').createForm,
	create     : require('./routes/user.js').create
};
