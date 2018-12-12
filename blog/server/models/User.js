const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema= new Schema({
    username: String,
    password: String,
    salt: String
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);