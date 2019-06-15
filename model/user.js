const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	city: String,
	email: {
		type: String,
		required: true,
		unique: true,	
	}
	
});

userSchema.index({ name: 'text' });

module.exports = mongoose.model('User', userSchema);