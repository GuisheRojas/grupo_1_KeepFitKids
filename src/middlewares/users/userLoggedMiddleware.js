const User = require('../../Models/User')

function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = false;
    
    if (req.session && req.session.user){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.user;
    }

    next()
}

module.exports = userLoggedMiddleware