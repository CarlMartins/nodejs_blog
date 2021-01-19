const User = require('../models/Users');
const bcrypt = require('bcrypt')

exports.LoginScreen = (req, res) =>
{
    res.render('logIn');
}

exports.LoginAuth = (req, res) =>
{
    let loginUsername = req.body.username;
    let password = req.body.password;

    User.findOne({ username: loginUsername }, (err, user) =>
    {
        if (err) console.log(err);

        if (user)
        {
            bcrypt.hash(password, 10, (err, hashpass) =>
            {

            })
        }
        else
        {
            res.render('logIn', { error: "Login ou senha inválidos" });
        }
    })
}