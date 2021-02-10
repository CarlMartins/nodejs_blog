const Post = require('../../models/Posts');
const Category = require('../../models/Categories');
const validate = require('../../helpers/validations/postValidation')

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
    let { title, category, briefText, text } = req.body;
    let err = validate(title, category, briefText, text);

    if (err)
    {
        res.render('admin/createpost', {
            err: err
        })
    } else
    {
        new Post({
            title: title,
            brief_text: briefText,
            text: text,
            category: category,
        }).save().then(() =>
        {
            req.flash('success_msg', 'Post created');
            res.redirect('/');
        })
    }
}

