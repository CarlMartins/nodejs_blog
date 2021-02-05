module.exports = {
    postValidation:
        function valitadeCreatePost(title, category, text)
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