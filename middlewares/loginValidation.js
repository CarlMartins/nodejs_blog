module.exports = {
    loginValidation:
        loginValidation = (req, res, next) =>
        {
            if (!req.body.username)
            {
                req.flash('err_msg', 'Empty field(s)')
                res.redirect('/login')
            } else if (!req.body.password)
            {
                req.flash('err_msg', 'Empty field(s)')
                res.redirect('/login')
            }

            next();
        }
}