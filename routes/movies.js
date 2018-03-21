module.exports=function (app){
    
    var authMW = ()=> {return (req,res,next)=> {return next()}}
    var renderMW = require('../middleware/generic/render')
    var saveMovie = require('../middleware/movie/saveMovie')
    var deleteMovie = require('../middleware/movie/deleteMovie')
    var loadMovies = require('../middleware/movie/loadMovie')
    var loadMovies = require('../middleware/movie/loadMovies')

    var objrep={db:{getAll:()=>{return '  qwe'}}}
        
    app.get('/movies/add',
        authMW(),
        renderMW(objrep,'madd'))
    app.post('/movies/add',
        authMW(),
        saveMovie(objrep))

    app.get('/movies/del/:id',
        authMW(),
        loadMovie(objrep),
        deleteMovie(objrep))
    

    app.get('/movies/mod/:id',
        authMW(),
        loadMovie(objrep),
        renderMW(objrep,'mmod'))
    app.post('/movies/mod/:id',
        authMW(),
        loadMovie(objrep),
        saveMovie(objrep))

    app.get('/movies',
        authMW(),
        loadMovies(objrep),
        renderMW(objrep,'mlist'))


    
}