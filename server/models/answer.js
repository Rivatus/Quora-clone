const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const answerSchema = new Schema({
    UserId:String,
    Question:String,
    Description:String,
    Date: {
        type: Date,
        default: new Date()
    }
});

// Model
const answer = mongoose.model('answers', answerSchema);

module.exports =  answer;