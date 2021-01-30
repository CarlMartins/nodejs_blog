const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorieSchema = new Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('categories', CategorieSchema)