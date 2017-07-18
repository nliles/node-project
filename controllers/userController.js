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
			const isPhoto = file.mimetype.startsWith('image/');
			isPhoto ? next(null, true) : next({message: 'That filetype is not allowed.'}, false)
	}
}

exports.uploadPhoto = multer(multerOptions).single('photo');

exports.resizePhoto = async (req, res, next) => {
  if (!req.file) {
    next(); 
    return;
  }
  const extension = req.file.mimetype.split('/')[1];
  req.body.photo = `${uuid.v4()}.${extension}`;
  const photo = await jimp.read(req.file.buffer);
  await photo.resize(800, jimp.AUTO);
  await photo.write(`./public/uploads/${req.body.photo}`);
  next();
};

exports.login = (req, res) => {
	res.render('login', { title: 'Login'} );
}

exports.registerForm = (req, res) => {
	res.render('register', { title: 'Register'} );
}

exports.validateRegister = (req, res, next) => {
  console.log(req.body.photo)
	req.sanitizeBody('firstname');
	req.checkBody('firstname', 'You must provide a first name').notEmpty();
	req.sanitizeBody('lastname');
	req.checkBody('lastname', 'You must provide a last name').notEmpty();
	req.checkBody('email', 'That Email is not valid').isEmail();
	req.sanitizeBody('email').normalizeEmail({
		gmail_lowercase: true,
        remove_extension: false,
    	gmail_remove_subaddress: false
	});
    req.checkBody('password', 'Password Cannot be Blank.').notEmpty();
    req.checkBody('password', "Password must be between 4-8 characters and must include one lowercase character, one uppercase character, and a number.")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/, "i");
    req.checkBody('password-confirm', 'Confirmed Password cannot be blank.').notEmpty();
    req.checkBody('password-confirm', 'Your passwords do not match').equals(req.body.password);

    const errors = req.validationErrors();
	  if (errors) {
	    req.flash('error', errors.map(err => err.msg));
	    res.render('register', { title: 'Register', body: req.body, flashes: req.flash() });
	    return; 
	  }
	next();
}

exports.register = async (req, res, next) => {
  console.log(req.body.photo)
  const user = new User(req.body);
  const register = promisify(User.register, User);
  await register(user, req.body.password);
  next();
}

exports.userpage = async (req, res) => {
  const trips = await Trip.find({ author: req.user._id });
  res.render('account', {trips, title: `${req.user.firstname}'s Account`});
}

exports.editAccount = (req, res) => {
  const user = User.findOne({ email: req.body.email });
  res.render('editAccount', { title: "Edit" });
}

exports.updateAccount = async (req, res) => {
  const updates = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email
  };

  const user = await User.findOneAndUpdate( 
    { _id: req.user._id }, 
    { $set: updates}, 
    { new: true, runValidators: true, context: 'query' }
    );
    req.flash('success', 'Account successfully updated!');
    res.redirect('/editAccount');
}






