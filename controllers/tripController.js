const mongoose = require('mongoose');
const User = mongoose.model('User');
const Trip = mongoose.model('Trip');
const promisify = require('es6-promisify');
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

const multerOptions = {
	storage: multer.memoryStorage(),
	// fileFilter(req, file, next) {
	// 	const isPhoto = file.mimetype.startsWith('image/');
	// 	if (isPhoto) {
	// 		next(null, true);
	// 	} else {
	// 		next({message: 'That filetype is not allowed.'}, false);
	// 	}
	// }
}

exports.addTrip = (req, res) => {
	res.render('addTrip');
}

exports.uploadPhoto = multer(multerOptions).array('photo', 20);

exports.resizePhoto = async (req, res, next) => {
	if (!req.files) {
	    next(); 
	    return;
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
	req.body.author = req.user._id;
	const trip = await (new Trip(req.body)).save();
	req.flash('success', `Successfully Created ${trip.name}.`);
	res.redirect('/account');
}







