const mongoose = require('mongoose');

const getPosts = (req, res) => {
    res.send("Hello World!");
}

module.exports = { getPosts };