const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryappangular');
const Schema = mongoose.Schema;

var NewbookdataSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    more: String,
    img: String
});

var bookdata = mongoose.model('bookdata', NewbookdataSchema);                    

module.exports = bookdata;