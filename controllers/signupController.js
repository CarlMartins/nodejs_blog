const User = require('../models/Users');
const signUpValidation = require('../helpers/validations/signUpValidation')

exports.SignUpPage = (req, res) =>
{
    res.render('signup');
}

exports.SignUp = (req, res) =>
{
    let { username, email, password, birthdate, alias } = req.body;
    let err = signUpValidation(username, email, password, birthdate);

    if (err)
    {
        res.render('signup', {
            err: err
        })
    } else
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
        })
    }
};