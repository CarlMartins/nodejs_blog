const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/signupController');
const loginController = require('../controllers/loginController');
const passport = require('passport');

router.get('/signup', signUpController.SignUpPage);
router.post('/signup/new', signUpController.SignUp);
router.get('/login', loginController.LoginScreen);
router.post('/login/auth', passport.authenticate('local'), loginController.LoginTest);

module.exports = router;