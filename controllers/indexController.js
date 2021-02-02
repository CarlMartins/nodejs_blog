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