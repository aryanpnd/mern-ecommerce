const mongoose = require('mongoose');
const { Schema } = mongoose;
//Defining DB Schema and Model---------------------------------------------------
// -----------function to validate email-----------
const validateEmail = function (email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
};
//   -----------------------------------------------
const userschema = new Schema({

    firstname: { type: String, required: [true, "First name required"] },
    lastname: { type: String ,required:[false]},
    email: {
        type: String,
        required: [true, "Email required"],
        validate: [validateEmail, "Please enter a valid email"],
        unique: [true, "email already exists"]
    },
    password: {
        type: String,
        min: [6, "password must be greater than 6 characters"],
        required: [true, "last name required"]
    },
    token:String

});

// defining model **remember, model's first argument will be your collection name and always should be in first letter capital and in plural form for instance:- if my collection name is "meows" than the argument should be "Meow" or "cats" as "Cat"
const User = mongoose.model('User', userschema);
// -------------------------------------------------------------------------

module.exports = {User }