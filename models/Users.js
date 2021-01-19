const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

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

UserSchema.pre('save', function (next)
{
    var user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt) =>
    {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, (err, hashPassword) =>
        {
            if (err) return next(err);
            user.password = hashPassword;
            next();
        })
    })
})


module.exports = mongoose.model('users', UserSchema);