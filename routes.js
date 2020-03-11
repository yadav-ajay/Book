const express = require('express');

const getbooks = require('./controllers/get-book');
const createbook = require('./controllers/create-book');
const createAuthor = require('./controllers/create-Author');

const router = express.Router();
router.get('/',(req,res) => {res.send('Hello world')});

router.get('/books', getbooks);
router.get('/author',createAuthor);
router.post('/book',createbook);
router.post('/author',createAuthor);

module.exports = router;