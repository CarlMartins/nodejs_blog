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
    let { title, category, brieftext, textarea } = req.body;
    let err = validate(title, category, brieftext, textarea);

    if (err)
    {
        err.forEach(element => {
            req.flash('err_msg', ` ${element.text}`);
        });
        res.redirect('/admin/createpost');
    } else
    {
        new Post({
            title: title,
            brief_text: brieftext,
            text: textarea,
            category: category,
        }).save().then(() =>
        {
            req.flash('success_msg', 'Post created');
            res.redirect('/');
        })
    }
}

