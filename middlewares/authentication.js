const midAuthentication = (req, res, next) =>
{
    if (req.user)
    {
        if (req.user.id == process.env.ADMIN_ID)
        {
            next();
        } else
        {
            req.flash('err_msg', "Access denied");
            res.redirect('/');
        }
    }
    else
    {
        req.flash('err_msg', "You need to be logged in");
        res.redirect('/login')
    }
}

module.exports = midAuthentication;