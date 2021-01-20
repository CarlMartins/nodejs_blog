const Flash = (req, res, next) =>
{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.err_msg = req.flash('err_msg');
    next();
}

module.exports = Flash;