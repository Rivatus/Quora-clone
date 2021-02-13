const express = require('express');
const { getAllPosts, postQuestion } = require('../Controller/posts.js');
const { login }=require('../Controller/login.js');
const router = express.Router();

router.get('/', getAllPosts);
router.post('/question',postQuestion);
router.post('/login',login);
module.exports = router;