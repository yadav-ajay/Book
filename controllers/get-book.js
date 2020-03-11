const express = require('express');
const book = require('../modal/books');

const controllers = async(req,res) => {
    const books = await book.find().populate('author');
    // console.log(books);
    res.render('books',{books: books});
}
module.exports = controllers;