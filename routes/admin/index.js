var express = require('express');
var router = express.Router();
const indexController = require('../../controllers/admin/indexController');

/* GET home page. */
router.get('/', indexController.Index);

module.exports = router;
