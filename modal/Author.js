const mongoose = require('mongoose');

const Authorshema = new mongoose.Schema({
name:{type:'string',required:true},
about:'string',
email:{type:'string',required:true, unique:true},
avatarUrl:'string',
});

const Author = mongoose.model('Author',Authorshema);

module.exports = Author;