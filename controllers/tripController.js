const mongoose = require('mongoose');
const User = mongoose.model('User');
const Trip = mongoose.model('Trip');
const promisify = require('es6-promisify');
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

const multerOptions = {
	storage: multer.memoryStorage(),
	fileFilter(req, file, next) {
		for (var i = 0; i < req.files.length; i++)  {	
			const isPhoto = file.mimetype.startsWith('image/');
			isPhoto ? next(null, true) : next({message: 'That filetype is not allowed.'}, false)
		}
	}
}

exports.addTrip = (req, res) => {
	res.render('addTrip');
}

exports.uploadPhoto = multer(multerOptions).array('photo', 20);

exports.resizePhoto = async (req, res, next) => {
	console.log(req.files)
	if (!req.files) {
	    return next(); 
	}
	for (var i = 0; i < req.files.length; i++)  {
	const extension = req.files[i].mimetype.split('/')[1];
	req.body.photo = `${uuid.v4()}.${extension}`;
	const photo = await jimp.read(req.files[i].buffer);
	await photo.resize(800, jimp.AUTO);
	await photo.write(`./public/uploads/${req.body.photo}`);	
	}
	next();
};

exports.createTrip = async (req, res) => {
	console.log(req.files)
	req.body.author = req.user._id;
	const trip = await (new Trip(req.body)).save();
	req.flash('success', `Successfully Created ${trip.name}.`);
	res.redirect(`/trip/${trip.slug}`);
}

exports.showTrips = async (req, res) => {
  const trips = await Trip.find();
  res.render('trips', { trips });
};

exports.getTripBySlug = async (req, res, next) => {
	console.log(req.params.slug)
	const trip = await Trip.findOne({ slug: req.params.slug});
	if (!trip) return next();
	res.render('trip', { trip, title: trip.name });
}







