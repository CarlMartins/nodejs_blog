var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController');
const isAuth = require('../middlewares/authentication');

router.get('/admin', isAuth, adminController.Index);
router.get('/admin/users', isAuth, adminController.ShowUsers);
router.post('/admin/users/delete/:id', isAuth, adminController.DeleteUser);
router.get('/admin/createCategory', isAuth, adminController.CreateCategoryPage);
router.post('/admin/createCategory/new', isAuth, adminController.CreateCategory);
router.get('/admin/createPost', isAuth, adminController.CreatePostPage);
router.post('/admin/createPost/new', isAuth, adminController.CreatePost);

module.exports = router;
