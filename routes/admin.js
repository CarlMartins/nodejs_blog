var express = require('express');
var router = express.Router();
const indexController = require('../controllers/adminController');

router.get('/admin', indexController.Index);

module.exports = router;
