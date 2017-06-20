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
}

exports.forgotPassword = async (req, res, next) => {
	const user = await User.findOne({ email: req.body.email });
	if(!user) {
		req.flash('error', 'No account with that email exists.');
		res.redirect('/login');
	}

	user.resetPasswordToken = crypto.randomBytes(15).toString('hex');
	user.resetPasswordExpires = Date.now() + 3600000;
	await user.save();
	const resetURL = `http://${req.headers.host}/account/reset/${user.resetPasswordToken}`;
	mail.send({

	});

	req.flash('success', 'You have been emailed a password reset link');
	res.redirect('/login');
}

exports.resetPassword = async (req, res) => {
	const user = await User.findOne({ 
		resetPasswordToken: req.params.token,
		resetPasswordExpires: { $gt: Date.now() }
	 });

	if(!user) {
		req.flash('error', 'Password token has expired or is invalid.')
		return res.redirect('/login');
	}
	res.render('reset');
}