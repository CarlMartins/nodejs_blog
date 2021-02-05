const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    title:
    {
        type: String,
        required: true,
    },
    category:
    {
        type: Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    },
    brief_text:
    {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('posts', PostSchema)