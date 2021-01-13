const UserModel = require('../models/Users');

exports.SignUpPage = (req, res) =>
{
    res.render('signup');
}

exports.SignUp = (req, res) =>
{
    const err = [];
    if (!req.body.username || typeof req.body.username === undefined || req.body.username === null)
    {
        err.push({
            text: "Nome inválido"
        });
    };

    new UserModel({
        username: req.body.username,
        alias: req.body.alias,
        email: req.body.email,
        password: req.body.password,
        birthdate: req.body.birthdate
    }).save().then(() =>
    {
        console.log("Usuario criado com sucesso");
        res.redirect('/')
    }).catch((err) =>
    {
        console.log(`Falha na criação do usuario - Erro: ${err}`);
        res.redirect('/signup')
    });
}