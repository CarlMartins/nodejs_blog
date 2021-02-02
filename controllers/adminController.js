const toUpper = require('../helpers/toUpper');


//===================================
// INDEX
//===================================
exports.Index = (req, res) =>
{
    res.render('admin/index', { title: 'Admin' });
}

//===================================
// USERS
//===================================
const User = require('../models/Users');

exports.ShowUsers = (req, res) =>
{
    User.find({}, (err, users) =>
    {
        if (err) return err;
        res.render('admin/users', {
            users: users
        });
    });
};

exports.DeleteUser = (req, res) =>
{
    User.deleteOne({ _id: req.params.id }, (err) =>
    {
        if (err)
        {
            console.log(err);
        }
        req.flash('success_msg', `User ${req.params.id} deleted`)
        res.redirect('/admin/users');
    })
};

//===================================
// CATEGORIES
//===================================
const Category = require('../models/Categories');

exports.CreateCategoryPage = (req, res) =>
{
    res.render('admin/createCategory')
}

exports.CreateCategory = (req, res) =>
{
    let categoryName = req.body.categoryName;
    categoryName = toUpper.toUpper(categoryName);

    new Category({
        title: categoryName
    }).save().then(() =>
    {
        req.flash('success_msg', 'Category created')
        res.redirect('/admin');
    }).catch((err) =>
    {
        req.flash('error_msg', `Error: ${err}`)
    })
}

//===================================
// POSTS
//===================================
const Post = require('../models/Posts');
exports.CreatePostPage = (req, res) =>
{
    Category.find({}, (err, category) =>
    {
        if (err) return (err);
        res.render('admin/createPost', {
            category: category
        })
    })
}

exports.CreatePost = (req, res) =>
{
    let title = req.body.title;
    let category = req.body.category;
    let text = req.body.textarea;

    new Post({
        title: title,
        text: text,
        category: category,
    }).save().then(() =>
    {
        req.flash('success_msg', 'Post created');
        res.redirect('/');
    }).catch((err) =>
    {
        req.flash('err_msg', `Failed: ${err}`)
    })
}
