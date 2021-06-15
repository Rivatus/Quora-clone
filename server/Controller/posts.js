const mongoose = require('mongoose');
const question = require('../models/question.js');
const users = require('../models/user.js');
const answers = require('../models/answer.js');
const getPost = (req, res) => {
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

const getAllPosts = async (req, res) => {
    try {
        // const answer = await answers.find();
        // answer.sort(function (a, b) { a.questionId < b.questionId });
        // const questions = await question.find();
        // questions.sort(function (a, b) { a._id < b._id });
        // const posts = [];
        // let i = 0, j = 0, l = 0;
        // for (; (i < answer.length) && (l < questions.length); i = j, ++l) {
        //     while (questions[l]._id != answer[i].questionId) {
        //         posts.push({ question: questions[l], answer: [] });
        //         ++l;
        //     }
        //     let temp = [];
        //     while ((j < answer.length) && (answer[i].questionId === answer[j].questionId)) {
        //         temp.push(answer[j]);
        //         ++j;
        //     }
        //     posts.push({ question: question[l], answer: temp });
        //     ++l;
        // }
        // while (l < questions.length) {
        //     posts.push({ question: questions[l], answer: [] });
        //     ++l;
        // }
        const questions = await question.find();
        const posts = [];
        for (let i = 0; i < questions.length; ++i) {
            for (let j = 0; j < questions[i].answersId.length; ++j) {
                const answer = await answers.findById(questions[i].answersId[j]);
                posts.push({ question: questions[i], answer: answer });
            }
            if (questions[i].answersId.length == 0) posts.push({ question: questions[i] });
        }
        // console.log(posts);
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error });
    }
}

const answerquestion = async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
        const genAns = { userId: data.user.userDetail, questionId: data.questionId.id, description: data.answer };
        const newAnswer = new answers(genAns);
        await newAnswer.save();
        await question.findByIdAndUpdate(newAnswer.questionId, { $push: { answersId: newAnswer._id } });
        res.status(200).json(1);
    } catch (error) {
        console.log(error);
        res.status(404).json(2);
    }
}


module.exports = { getPost, postQuestion, answerquestion, getAllPosts };