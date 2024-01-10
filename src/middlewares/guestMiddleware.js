function guestMiddleware (req, res, next){
    if(req.session.user == undefined){
        next();
    } else {
        res.send('Esta página es solo para invitados')
    }
}

module.exports = guestMiddleware;