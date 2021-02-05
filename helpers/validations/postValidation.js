module.exports = {
    postValidation:
        function valitadeCreatePost(title, category, brieftext, text)
        {
            const err = [];

            if (!title || title == null || typeof title == 'undefined')
            {
                err.push('Invalid title');
            }

            if (category == 'Pick a category')
            {
                err.push('Invalid category');
            }

            if (!brieftext || brieftext == null || typeof brieftext == 'undefined')
            {
                err.push('Invalid Brieftext');
            }

            if (!text || text == null || typeof text == 'undefined')
            {
                err.push('Invalid text');
            }

            if (err.length > 0)
            {
                return err;
            } else
            {
                return null;
            }
        }
}