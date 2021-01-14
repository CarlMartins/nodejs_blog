const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/signupController');

router.get('/signup', signUpController.SignUpPage);
router.post('/auth',)
router.post('/signup/new', signUpController.SignUp);

module.exports = router;