const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryappangular');
const Schema = mongoose.Schema;

var NewuserSchema = new Schema({
    name: String,
    psw: String
});

var userdata = mongoose.model('userdata', NewuserSchema);                    

module.exports = userdata;