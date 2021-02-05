const Post = require('../../models/Posts');
const Category = require('../../models/Categories');

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