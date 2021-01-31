const User = require('../models/Users');

exports.SignUpPage = (req, res) =>
{
    res.render('signup');
}

exports.SignUp = (req, res) =>
{
    var err = [];
    let username = req.body.username;
    if (!username || typeof username === undefined || username === null)
    {
        err.push({
            text: "Invalid username"
        });
    }

    let email = req.body.email;
    if (!email || typeof email === undefined || email === null)
    {
        err.push({
            text: "Invalid email"
        });
    }

    let password = req.body.password;
    if (!password || typeof password === undefined || password === null)
    {
        err.push({
            text: "Invalid password"
        });
    }

    let birthdate = req.body.birthdate;
    if (!birthdate || typeof birthdate === undefined || birthdate === null)
    {
        err.push({
            text: "Invalid birthdate"
        });
    }
    let alias = req.body.alias;

    if (err.length > 0)
    {
        res.render('signUp', { err: err });
    }
    else
    {
        new User({
            username: username,
            alias: alias,
            email: email,
            password: password,
            birthdate: birthdate
        }).save().then(() =>
        {
            req.flash('success_msg', 'Usuario criado com sucesso');
            res.redirect('/')
        }).catch((err) =>
        {
            req.flash('error_msg', 'Falha ao criar usuario')
            res.redirect('/signup')
        });
    };
};