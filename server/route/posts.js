const express = require('express');
const { getPosts,postAnswer } = require('../Controller/posts.js');

const router = express.Router();

router.get('/', getPosts);
router.post('/',postAnswer);

module.exports = router;