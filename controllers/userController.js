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
	res.render('login');
}

exports.registerForm = (req, res) => {
	res.render('register');
}

exports.validateRegister = (req, res, next) => {
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
  const user = new User({ email: req.body.email, firstname: req.body.firstname, lastname: req.body.lastname, photo: req.body.photo });
  const register = promisify(User.register, User);
  await register(user, req.body.password);
  next();
}

exports.userpage = (req, res) => {
  const user = User.findOne({ email: req.body.email });
  res.render('account');
}

exports.editAccount = (req, res) => {
  const user = User.findOne({ email: req.body.email })
  res.render('editAccount', { title: "Edit Your Account" });
}

exports.updateAccount = async (req, res) => {
  const updates = {
    name: req.body.name,
    email: req.body.email
  };

  const user = await User.findOneAndUpdate( 
    {_id: req.user._id }, 
    { $set: updates}, 
    { new: true, runValidators: true, context: 'query' }
    );
    req.flash('success', 'Account successfully updated!');
    res.redirect('/editAccount');
}






