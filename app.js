var express = require('express');
var app = express();

require('./routes/movies')(app);

//app.use(express.static('static'));

app.use(function(req,res,next){
    res.tpl={}
     next()
})

app.use(function(err,req,res,next){
    res.status(500).send("fuuuck")
    console.error(err.stack)
})


app.use('/',function(req,res,next){
    next()
})

var server = app.listen(3000, function () {
    console.log("port:3000")
});