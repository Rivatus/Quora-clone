const mongoose = require('mongoose');
const question = require('../models/question.js');
const user = require('../models/user.js');
const users = require('../models/user.js');

const getPosts = (req, res) => {
    res.send("Hello World!");
}

const postQuestion = async (req, res) => {
    const data = req.body;

    const newQuestion = new question(data);
    try {
        await newQuestion.save();

        user.findByIdAndUpdate(newQuestion.userId,);
        res.status(200).json(newQuestion);

    } catch (error) {
        res.status(404).json({ message: error });
    }
}

module.exports = { getPosts, postQuestion };