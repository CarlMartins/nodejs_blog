const Validate = (req, res, next) =>
{
    let err = [];
    let username = req.body.username;
    if (!username.length || username === undefined || username === null)
    {
        err.push({
            text: "Username invalido"
        });
    }

    let email = req.body.email;
    if (!email.lenght || email === undefined || email === null)
    {
        err.push({
            text: "Email inválido"
        });
    }

    let password = req.body.password;
    if (!password.lenght || password === undefined || password === null)
    {
        err.push({
            text: "Senha invalida"
        });
    }

    let birthdate = req.body.birthdate;
    if (!birthdate.lenght || birthdate === undefined || birthdate === null)
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
        next();
    }
}

module.exports = Validate;

