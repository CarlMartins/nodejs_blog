const User = require('../../models/Users');

exports.ShowUsers = (req, res) =>
{
    User.find({}, (err, users) =>
    {
        if (err) return err;
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