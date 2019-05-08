var bcrypt = require('bcrypt');
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true,
		set: pwd => bcrypt.hashSync(pwd, 10)
	}
});
module.exports = mongoose.model('User', UserSchema);