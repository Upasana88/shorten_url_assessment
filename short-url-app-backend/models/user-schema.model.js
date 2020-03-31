const mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
      }
});

usersSchema.path('email').validate((value)=> {
    return value;
}, 'email is required');
usersSchema.path('username').validate((value)=> {
    return value;
}, 'username is required');
usersSchema.path('password').validate((value)=> {
    return value;
}, 'password is required');
mongoose.model('users', usersSchema);