const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const tripController = require('../controllers/tripController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/login', userController.login);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/login', authController.login);
router.get('/register', userController.registerForm);

router.post('/register',
  userController.validateRegister,
  userController.register,
  authController.login
);

router.post('/account/forgot', authController.forgotPassword);
router.get('/account/reset/:token', authController.resetPassword);
router.post('/account/reset/:token', 
	authController.confirmedPasswords,
	authController.updatePassword
);

router.get('/account', authController.isLoggedIn, userController.account);

router.get('/trip', tripController.addTrip);
router.post('/trip', 
	tripController.uploadPhoto,
	catchErrors(tripController.resizePhoto),
	catchErrors(tripController.createTrip)
);



module.exports = router;