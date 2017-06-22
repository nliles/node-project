const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const slug = require('slugs');
const validator = require('validator');

const tripSchema = new Schema({
	name: {
		type: String,
		required: 'Please supply a name',
		trim: true
	},
	description: {
		type: String,
		trim: true
	},
	photo: String,
	author: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: 'You must supply an author'
	}

});

module.exports = mongoose.model('Trip', tripSchema);
