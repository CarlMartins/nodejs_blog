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
    let title = req.body.title;
    let category = req.body.category;
    let text = req.body.textarea;
    let err = validate.postValidation(title, category, text);

    if (err != null)
    {
        for (let i = 0; i < err.length; i++)
        {
            req.flash('err_msg', ` ${err[i]}`);
        }
        res.redirect('/admin/createpost');
    } else
    {
        new Post({
            title: title,
            text: text,
            category: category,
        }).save().then(() =>
        {
            req.flash('success_msg', 'Post created');
            res.redirect('/');
        })
    }
}

