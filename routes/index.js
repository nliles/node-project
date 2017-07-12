const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const tripController = require('../controllers/tripController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(tripController.showTrips));

router.get('/login', userController.login);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/login', authController.login);
router.get('/register', userController.registerForm);

router.post('/register',
  userController.uploadPhoto,
  catchErrors(userController.resizePhoto),
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

router.get('/userpage', catchErrors(userController.userpage));

router.get('/account', authController.isLoggedIn, userController.editAccount);
router.post('/account', catchErrors(userController.updateAccount));

router.get('/trip', tripController.addTrip);
router.get('/trip/:slug', catchErrors(tripController.getTripBySlug));

router.post('/trip', 
	tripController.uploadPhoto,
	catchErrors(tripController.resizePhoto),
	catchErrors(tripController.createTrip)
);






module.exports = router;