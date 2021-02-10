function valitadeCreatePost(title, category, brieftext, text)
{
    const err = [];

    if (!title || title == null || typeof title == 'undefined')
    {
        err.push({
            text: 'Invalid title'
        });
    }

    if (category == 'Pick a category')
    {
        err.push({
            text: 'Invalid category'
        });
    }

    if (!brieftext || brieftext == null || typeof brieftext == 'undefined')
    {
        err.push({
            text: 'Invalid brieftext'
        });
    }

    if (!text || text == null || typeof text == 'undefined')
    {
        err.push({
            text: 'Invalid text'
        });
    }

    if (err.length > 0)
    {
        return err;
    }
}


module.exports = valitadeCreatePost;