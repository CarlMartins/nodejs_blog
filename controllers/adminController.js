const User = require('../models/Users');
const mongoose = require('mongoose');

exports.Index = (req, res) =>
{
    res.render('admin/index', { title: 'Admin' });
}

exports.ShowUsers = (req, res) =>
{
    // User.find().then((users) =>
    // {
    //     res.render('admin/users', {
    //         users: users
    //     })
    // })


    User.find({}, (err, users) =>
    {
        res.render('admin/users', {
            users: users
        })
    })
}

exports.CreatePost = (req, res) =>
{

}
