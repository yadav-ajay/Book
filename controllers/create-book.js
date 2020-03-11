const Author = require('../modal/books');

const controller = async(req,res) => {
const{body} = req;
const boooks = await Author.create({
    name: body.name,
    description: body.description,
    yearOfRelease:body.yearOfRelease,
    author:body.author
});
res.send(boooks);
};

module.exports = controller;