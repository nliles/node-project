const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');
const slug = require('slugs');

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
	  location: {
	    type: {
	      type: String,
	      default: 'Point'     
	    },
	    coordinates: [{
	      type: Number,
	      required: 'You must supply coordinates'
	    }],
	    address: {
	      type: String,
	      required: 'You must supply an address'
	    }
	  },
	photo: [String],
	author: {
	    type: mongoose.Schema.ObjectId,
	    ref: 'User',
	    required: 'You must supply an author'
 	 }
});


module.exports = mongoose.model('Trip', tripSchema);