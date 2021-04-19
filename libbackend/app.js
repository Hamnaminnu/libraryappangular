const express = require('express');
var bookdata = require('./src/book');
const authordata = require('./src/author');
const userdata = require('./src/user');
// const cors = require('cors');
var bodyparser= require('body-parser');
var app = new express();
// app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

app.post('/usercheck',function(req,res){
   
    console.log(req.body);
    const name = req.body.usercheck.uname;
    const upsw = req.body.usercheck.password;
    userdata.findOne({name:name,psw:upsw}, function(err, result) {
        if (result){
        let message="success" 
        res.status(200).send({message});
        }
        else {
            let message="fail" 
        res.status(200).send({message});
        }
      });
    
});
app.post('/userdata',function(req,res){
   
    console.log(req.body);
   
    var userdata = {       
        uname : req.body.user.uname,
        password : req.body.user.password
   }       
   var user = new userdata(userdata);
   user.save();
});
app.post('/insert',function(req,res){
   
    console.log(req.body);
   
    var book = {       
    title : req.body.bookdata.title,
    author: req.body.bookdata.author,
    genre : req.body.bookdata.genre,
    more : req.body.bookdata.more,
    img : req.body.bookdata.img
   }       
   var book = new bookdata(book);
   book.save();
});
app.post('/insertauthor',function(req,res){
   
    console.log(req.body);
   
    var author= {       
    author : req.body.authordata.name,
    born: req.body.authordata.born,
    genre : req.body.authordata.genre,
    more : req.body.authordata.more,
    img : req.body.authordata.img
   }       
   var author = new authordata(author);
   author.save();
});
app.get('/books',function(req,res){
   bookdata.find()
                .then(function(bookdata){
                    res.send(bookdata);
                });
});
app.get('/authors',function(req,res){
    authordata.find()
                .then(function(authordata){
                    res.send(authordata);
                });
});
app.post('/updatebook',function(req,res){
   
    console.log(req.body);
    const utitle = req.body.bookdata.title;
    const umore = req.body.bookdata.more;
    bookdata.updateOne({title:utitle},{$set:{more:umore}}).then(function(bookdata){
        res.send(bookdata);
    });
   
    
});
app.post('/updateauthor',function(req,res){
   
    console.log(req.body);
    const utitle = req.body.authordata.author;
    const umore = req.body.authordata.more;
    authordata.updateOne({author:utitle},{$set:{more:umore}}).then(function(authordata){
        res.send(authordata);
    });
   
    
    
});
app.post('/deletebook',function(req,res){
   
    console.log(req.body);
    const utitle = req.body.bookdata.title;
    bookdata.remove({title:utitle}).then(function(bookdata){
        res.send(bookdata);
    });
    
    
});
app.post('/deleteauthor',function(req,res){
   
    console.log(req.body);
    const utitle = req.body.authordata.author;
    authordata.remove({title:utitle}).then(function(authordata){
        res.send(authordata);
    });
    
});

app.listen(3000, function(){
    console.log('listening to port 3000');
});