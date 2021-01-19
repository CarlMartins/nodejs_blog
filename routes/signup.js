const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/signupController');
const loginController = require('../controllers/loginController');

router.get('/signup', signUpController.SignUpPage);
router.post('/signup/new', signUpController.SignUp);
router.get('/login', loginController.LoginScreen);
router.post('/login/auth', loginController.LoginAuth);

module.exports = router;