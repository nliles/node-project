const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const photoSchema = new Schema({
	photo: {
		type: String,
		required: 'Please supply a file',
	}, 
	// Description: String,
	author: {
	    type: mongoose.Schema.ObjectId,
	    ref: 'User',
	    required: 'You must supply an author'
 	 },
	trip: {
	    type: mongoose.Schema.ObjectId,
	    ref: 'Trip',
	    required: 'You must supply a trip'
 	 }
});

module.exports = mongoose.model('Photo', photoSchema);
