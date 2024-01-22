const fs = require('fs');

function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = false;
    let emailInCookie = req.cookies.userEmail;
    function FindUser(campo, texto){
        let allUsers = function(){
            return JSON.parse(fs.readFileSync('./database/usuarios.json', 'utf-8'))
        }
        let userFound = allUsers.find(User => User[campo] === texto);
        return userFound;
    }
    let userFromCookie = FindUser('email', emailInCookie)
    if (userFromCookie){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next()
}

module.exports = userLoggedMiddleware