const User = require('../models/Users');

exports.LoginScreen = (req, res) =>
{
    res.render('logIn');
}

exports.LoginAuth = (req, res) =>
{
    let err = [];
    let loginUsername = req.body.username;
    let password = req.body.password;

    if (!loginUsername)
    {
        err.push({
            err: "Enter the username"
        })
    }
    if (!password)
    {
        err.push({
            err: "Enter the password"
        });
    }
    if (err.length > 0)
    {
        res.render('login', { err: err })
    } else
    {
        User.findOne({ username: loginUsername }, (err, user) =>
        {
            if (err) console.log(err);
            if (!user || user == null)
            {
                req.flash('err_msg', 'User not found');
                res.redirect('/login');
            } else
            {
                user.comparePassword(password, function (err, isMatch)
                {
                    if (err) console.log(err);
                    if (isMatch)
                    {
                        req.flash('success_msg', 'Successfully logged in');
                        res.redirect('/index');
                    } else
                    {
                        req.flash('err_msg', 'User not found');
                        res.redirect('/login');
                    }
                })
            }
        })
    }
}
