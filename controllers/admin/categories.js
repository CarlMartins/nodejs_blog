const Category = require('../../models/Categories');
const toUpper = require('../../helpers/toUpper');

exports.CreateCategoryPage = (req, res) =>
{
    res.render('admin/createCategory')
}

exports.CreateCategory = (req, res) =>
{
    let categoryName = req.body.categoryName;
    categoryName = toUpper.toUpper(categoryName);

    new Category({
        title: categoryName
    }).save().then(() =>
    {
        req.flash('success_msg', 'Category created')
        res.redirect('/admin');
    }).catch((err) =>
    {
        req.flash('error_msg', `Error: ${err}`)
    })
}