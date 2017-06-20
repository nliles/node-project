const passport = require('passport');
const crypto = require('crypto');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');
const mail = require('../handlers/mail');

exports.login = passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login',
	successFlash: 'Welcome!',
	failureFlash: 'Invalid username or password'
});

exports.logout = (req, res) => {
	req.logout(),
	req.flash('success', 'Goodbye'),
	res.redirect('/')
};

exports.forgotPassword = async (req, res) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user) {
		req.flash('error','No user with that email found.')
		return res.redirect('/login');
	}
	user.resetPasswordToken = crypto.randomBytes(20).toString('hex');
	user.resetPasswordExpires = Date.now() + 3600000;
	await user.save();
	const resetURL = `http://${req.headers.host}/account/reset/${user.resetPasswordToken}`;

	req.flash('success', 'Password reset link emailed.')
	res.redirect(`/account/reset/${user.resetPasswordToken}`);
}

exports.resetPassword = async (req, res) => {
	const user = await User.findOne({
		resetPasswordToken: req.params.token,
		resetPasswordExpires: { $gt: Date.now()}
	});
	if (!user) {
		req.flash('error','Password reset link is invalid or has expired.')
		return res.redirect('/login');
	}
	res.render('reset');
}

exports.confirmedPasswords = (req, res, next) => {
    req.checkBody('password', 'Password Cannot be Blank.').notEmpty();
    req.checkBody('password', "Password must be between 4-8 characters and must include one lowercase character, one uppercase character, and a number.")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/, "i");
    req.checkBody('password-confirm', 'Confirmed Password cannot be blank.').notEmpty();
    req.checkBody('password-confirm', 'Your passwords do not match').equals(req.body.password);

    const errors = req.validationErrors();
	  if (errors) {
	    req.flash('error', errors.map(err => err.msg));
	    return res.redirect('back');
	  }
	next();	
	return;
}

exports.updatePassword = async (req, res) => {
	const user = await User.findOne({
		resetPasswordToken: req.params.token,
		resetPasswordExpires: { $gt: Date.now()}
	});
	if (!user) {
		req.flash('error','Password reset link is invalid or has expired.')
		return res.redirect('/login');
	}

	const setPassword = promisify(user.setPassword, user);
	await setPassword(req.body.password);
	user.resetPasswordToken = undefined;
	user.resetPasswordExpires = undefined;
	const updatedUser = await user.save();
	await req.login(updatedUser);
	req.flash('success', 'successfully updated password');
	res.redirect('/');
}





