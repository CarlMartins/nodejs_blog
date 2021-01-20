const UserModel = require('../models/Users');

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
    let alias = req.body.alias;

    if (err.length > 0)
    {
        res.render('signUp', { err: err });
    }
    else
    {
        new UserModel({
            username: username,
            alias: alias,
            email: email,
            password: password,
            birthdate: birthdate
        }).save().then(() =>
        {
            req.flash('success_msg', "Usuario criado com sucesso");
            res.redirect('/')
        }).catch((err) =>
        {
            req.flash('error_msg', 'Falha ao criar usuario')
            res.redirect('/signup')
        });
    };
};