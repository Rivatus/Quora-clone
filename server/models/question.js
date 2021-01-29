const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    heading: String,
    description: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    tags: [String],
    userId: [String],
    answersId: [String]
});

const question = mongoose.model("questions", questionSchema);

module.exports = question;