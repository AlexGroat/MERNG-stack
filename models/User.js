const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    createdAt: String
});

const User = model('User', userSchema);

module.exports = User;