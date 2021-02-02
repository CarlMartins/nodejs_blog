exports.LoginScreen = (req, res) =>
{
    res.render('logIn');
}

exports.LoginTest = (req, res) =>
{
    console.log(req.user.id);
    if (req.user.id == process.env.ADMIN_ID)
    {
        req.flash('success_msg', " welcome admin!");
        res.redirect('/admin');
    } else
    {
        req.flash('success_msg', ` welcome ${req.user.username}!`);
        res.redirect('/');
    }
}
