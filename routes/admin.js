var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/admin', adminController.Index);
router.get('/admin/users', adminController.ShowUsers);

module.exports = router;
