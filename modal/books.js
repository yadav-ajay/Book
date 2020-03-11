const mongoose = require('mongoose');
const Author = require('./Author');

const bookschema = new mongoose.Schema({
name:{type:'string',required:true},
description:'string',
yearOfRelease:{type:'string',required:true},
author:{type:'ObjectId',ref: Author, required:true}
});

const Books = mongoose.model('Books',bookschema);

module.exports = Books;