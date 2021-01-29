const express = require('express');
const { getPosts,postQuestion } = require('../Controller/posts.js');

const router = express.Router();

router.get('/', getPosts);
router.post('/question',postQuestion);

module.exports = router;