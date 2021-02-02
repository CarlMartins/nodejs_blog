const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get(['/index', '/'], indexController.Index);
router.get('/posts/:id', indexController.Post)

module.exports = router;