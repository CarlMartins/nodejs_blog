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
        err.forEach(element =>
        {
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

exports.managePosts = (req, res) =>
{
    Post.find({}).populate('category')
        .exec((err, posts) =>
        {
            if (err) return err;
            res.render('admin/managePosts', {
                posts: posts
            });
        })
}

exports.settingsPost = (req, res) =>
{
    let id = req.params.id;
    Post.findById(id, (err, post) =>
    {
        if (err) return err;
        res.render('admin/settingsPost', {
            Post: post
        })
    })
}

exports.editPostPage = (req, res) =>
{
    let allCategories = {};
    Category.find((err, categories) =>
    {
        if (err) console.log(err);
        allCategories = categories;
    });

    Post.findById(req.params.id, (err, posts) =>
    {
        res.render('admin/editPost', {
            Post: posts,
            Category: allCategories
        });
    })
};

exports.editPost = (req, res) =>
{
    const id = req.params.id;
    Post.findByIdAndUpdate({ _id: id }, {
        title: req.body.title,
        category: req.body.category,
        brief_text: req.body.brieftext,
        text: req.body.textarea,
    }, (err) =>
    {
        if (err) console.log(err);
        res.redirect('/admin');
    });

}

exports.deletePost = (req, res) =>
{
    const id = req.params.id;
    Post.deleteOne({ _id: id }, (err) =>
    {
        if (err) console.log(err);
        req.flash('success_msg', `User ${id} deleted`)
        res.redirect('/admin/managePosts');
    });
}