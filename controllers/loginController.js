exports.LoginScreen = (req, res) =>
{
    res.render('logIn');
}

exports.LoginTest = (req, res) =>
{
    let userId = req.user.id;
    let username = req.user.username;

    if (userId == process.env.ADMIN_ID || userId == '6027d3e4d59bae26080c0009')
    {
        req.flash('success_msg', " welcome admin!");
        res.redirect('/admin');
    } else
    {
        req.flash('success_msg', ` welcome ${username}!`);
        res.redirect('/');
    }
}
