const Category = require('../../models/Categories');
const toUpper = require('../../helpers/toUpper');
const categoryValidation = require('../../helpers/validations/categoryValidation')

exports.CreateCategoryPage = (req, res) =>
{
    res.render('admin/createCategory')
}

exports.CreateCategory = (req, res) =>
{
    let categoryName = req.body.categoryName;
    let err = categoryValidation(categoryName)

    if (err)
    {
        req.flash('err_msg', 'Empty field')
        res.redirect('/admin/createcategory')
    }

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