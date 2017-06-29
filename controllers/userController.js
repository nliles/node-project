const mongoose = require('mongoose');
const User = mongoose.model('User');
const Trip = mongoose.model('Trip');
const promisify = require('es6-promisify');

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
  const user = new User({ email: req.body.email, firstname: req.body.firstname, lastname: req.body.lastname });
  const register = promisify(User.register, User);
  await register(user, req.body.password);
  next();
}

exports.account = (req, res) => {
  const user = User.findOne({ email: req.body.email });
  const trips = Trip.find({ author: user._id });
  res.render('account');
}




