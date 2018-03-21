var requireOption= require('../common').requireOption

/**
 * Save movies
 * if ok redirect 
 * if not crash
 */

module.exports = function (objectrepository){

    var db = requireOption(objectrepository,'db')

    return function (req,res,next){
        console.log("save")
       // res.render(viewName,res.tpl)
        return next()
    }
}