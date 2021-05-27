var express = require('express');
var router = express.Router();
const adminIndex = require('../controllers/admin/index');
const adminUsers = require('../controllers/admin/users');
const adminCategories = require('../controllers/admin/categories');
const adminPosts = require('../controllers/admin/posts');
const isAuth = require('../middlewares/authentication');

router.get('/admin', isAuth, adminIndex.Index);
router.get('/admin/users', isAuth, adminUsers.ShowUsers);
router.post('/admin/users/delete/:id', isAuth, adminUsers.DeleteUser);
router.get('/admin/createCategory', isAuth, adminCategories.CreateCategoryPage);
router.post('/admin/createCategory/new', isAuth, adminCategories.CreateCategory);
router.get('/admin/createPost', isAuth, adminPosts.CreatePostPage);
router.post('/admin/createPost/new', isAuth, adminPosts.CreatePost);
router.get('/admin/managePosts', isAuth, adminPosts.managePosts);
router.get('/admin/posts/edit/:id', isAuth, adminPosts.editPost);
router.post('/admin/posts/delete/:id', isAuth, adminPosts.deletePost);

module.exports = router;
