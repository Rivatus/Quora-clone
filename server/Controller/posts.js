const mongoose = require('mongoose');
const question = require('../models/question.js');

const users = require('../models/user.js');
const getPosts = (req, res) => {
    res.send("Hello World!");
}

const postQuestion = async (req, res) => {
    const data = req.body;
    const newQuestion = new question(data);
    try {
        await newQuestion.save();
        await users.findByIdAndUpdate(newQuestion.userId, { $push: { questions: newQuestion._id } });
        res.status(200).json(1);
    } catch (error) {
        res.status(404).json(2);
    }
}

const login = async (req, res) => {
    const data = req.body;
    const user = new users(data);
    try {
        console.log(user);
        await user.update(
            {
                email:data.email
            },
            {
                "$set":{
                    "firstName":"Jason",
                    "lastName":"Thomas",
                    "emailAddress":"Carly.Monty@gmail.com",
                    "Pincode":559966
                }
            },
            {
                upsert:true
            }
        );
        console.log(user);
        //await users.findByIdAndUpdate(newQuestion.userId, { $push: { questions: newQuestion._id } });
        res.status(200).json(1);
    } catch (error) {
        res.status(404).json(2);
    }
}
module.exports = { getPosts, postQuestion, login};