const UserModel = require('../models/Users');
const bcrypt = require('bcrypt');

exports.SignUpPage = (req, res) =>
{
    res.render('signup');
}

exports.SignUp = (req, res) =>
{
    var err = [];
    let username = req.body.username;
    if (!username || username === undefined || username === null)
    {
        err.push({
            text: "Username invalido"
        });
    }

    let email = req.body.email;
    if (!email || typeof email === undefined || email === null)
    {
        err.push({
            text: "Email inválido"
        });
    }

    let password = req.body.password;
    if (!password || typeof password === undefined || password === null)
    {
        err.push({
            text: "Senha invalida"
        });
    }

    let birthdate = req.body.birthdate;
    if (!birthdate || typeof birthdate === undefined || birthdate === null)
    {
        err.push({
            text: "Data de nascimento invalida"
        });
    }

    if (err.length > 0)
    {
        res.render('signUp', { err: err });
    }

    else
    {
        bcrypt.hash(req.body.password, 10, (err, hashpass) =>
        {
            new UserModel({
                username: req.body.username,
                alias: req.body.alias,
                email: req.body.email,
                password: hashpass,
                birthdate: req.body.birthdate
            }).save().then(() =>
            {
                req.flash('success_msg', "Usuario criado com sucesso");
                res.redirect('/')
            }).catch((err) =>
            {

                req.flash('error_msg', 'Falha ao criar usuario')
                res.redirect('/signup')
            });
        })
    }
}