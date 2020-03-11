const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/book-app',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'pug');
app.set('views', './views');



const port = 3222;



app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));