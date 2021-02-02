const Post = require('../models/Posts');

exports.Index = (req, res) =>
{
    Post.find({}).
        populate('category').
        exec((err, posts) =>
        {
            res.render('index', {
                Post: posts
            })
        })
}

exports.Post = (req, res) =>
{
    Post.findById(req.params.id, (err, post) =>
    {
        if (err) console.log(err);
        res.render('post', {
            Post: post
        })
    })
}