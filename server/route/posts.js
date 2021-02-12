const express = require('express');
const { getPosts,postQuestion,login } = require('../Controller/posts.js');

const router = express.Router();

router.get('/', getPosts);
router.post('/question',postQuestion);
router.post('/login',login);
module.exports = router;