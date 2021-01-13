const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    alias: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    createdat: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('users', UserSchema);