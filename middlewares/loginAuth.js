const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/Users');

const Auth = (req, res, next) =>
{
    passport.use(
        new LocalStrategy(
            (username, password, done) =>
            {
                User.findOne({ username: username }, (err, user) =>
                {
                    if (err) console.log(err);

                    if (!user || user == null || typeof user == 'undefined')
                    {
                        req.flash('err_msg', 'Username not found');
                        res.redirect('/login');
                    }
                    else
                    {
                        user.comparePassword(password, function (err, isMatch)
                        {
                            if (err) console.log(err);
                            if (isMatch)
                            {
                                req.flash('success_msg', 'Successfully logged in');
                                return done(err, user);
                            }
                            else
                            {
                                req.flash('err_msg', 'Wrong password');
                                res.redirect('/login');
                            }
                        })
                    }
                })
            }
        ))
    next();
}

module.exports = Auth;