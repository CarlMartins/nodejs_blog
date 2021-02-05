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
    let id = req.params.id;
    Post.findById(id, (err, post) =>
    {
        if (err) console.log(err);
        let views = post.views;
        Post.updateOne({ _id: id },
            { views: views + 1 }, (err, doc) =>
        {
            if (err) return err;
        })
        res.render('post', {
            Post: post
        })
    })
}