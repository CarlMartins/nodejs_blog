const express = require('express');
const app = require('../app');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get(['/index', '/'], indexController.Index);

module.exports = router;