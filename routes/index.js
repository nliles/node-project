const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
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

module.exports = router;