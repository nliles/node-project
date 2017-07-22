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
	slug: String,
	description: {
		type: String,
		trim: true
	},
	locations: [

		  {

		    type: {
		      type: String,
		      default: 'Point'     
		    },

		    coordinates: [

		    {
		      type: Number,
		      required: 'You must supply coordinates'
		    }

		    ],

		    address: {
		      type: String,
		      required: 'You must supply an address'
		    }

		  }

	],
	photo: [String],
	author: {
	    type: mongoose.Schema.ObjectId,
	    ref: 'User',
	    required: 'You must supply an author'
 	 }
});


tripSchema.pre('save', async function(next) {
	if(!this.isModified('name')) {
		next();
		return;
	}
	this.slug = slug(this.name);

  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`,'i');
  const tripsWithSlug = await this.constructor.find({ slug: slugRegEx });
  if (tripsWithSlug.length) {
    this.slug = `${this.slug}-${tripsWithSlug.length + 1}`;
  }
	next();
});


module.exports = mongoose.model('Trip', tripSchema);