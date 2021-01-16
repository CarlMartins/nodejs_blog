const User = require('../models/Users');
const mongoose = require('mongoose');

exports.Index = (req, res) =>
{
    res.render('admin/index', { title: 'Admin' });
}

exports.ShowUsers = (req, res) =>
{
    User.find({}, (err, users) =>
    {
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

exports.CreatePost = (req, res) =>
{

}
