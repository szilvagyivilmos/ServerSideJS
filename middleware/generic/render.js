var requireOption= require('../common').requireOption

module.exports = function (objectrepository,viewName){

var db = requireOption(objectrepository,'db')

    return function (req,res,next){
        console.log("asd")
       // res.render(viewName,res.tpl)
        res.end('template '+viewName+db.getAll())
    }
}