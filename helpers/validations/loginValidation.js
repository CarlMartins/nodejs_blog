loginAuth = (req, res, next) =>
{
    if (!req.body.username)
    {
        console.log("Sem username");
    }

    next();
}

module.exports = loginAuth;