const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
    Question:String,
    Description:String,
    Date: {
        type: Date,
        default: new Date()
    }
});

// Model
const user = mongoose.model('users', userSchema);

module.exports =  user;