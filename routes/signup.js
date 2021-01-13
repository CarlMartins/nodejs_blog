const express = require('express');
const router = express.Router();
const signUpErr = require('../middlewares/signUpErr');
const signUpController = require('../controllers/signupController');

router.get('/signup', signUpController.SignUpPage);
router.post('/signup/new', signUpErr, signUpController.SignUp);

module.exports = router;