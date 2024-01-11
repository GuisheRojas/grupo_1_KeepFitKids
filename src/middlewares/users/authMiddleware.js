function authMiddleware (req, res, next){
    if(req.session.user != undefined){
        next();
    } else {
        res.render('./users/login')
    }
}

module.exports = authMiddleware;