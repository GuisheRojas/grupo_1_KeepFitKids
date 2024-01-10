const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../database/usuarios.json');
let usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')

const controller = {
    login: (req, res) => {
        res.render('./users/login')
    },
    singIn: (req, res) => {
        let errors = validationResult(req);
        if(errors.errors.length == 0){
            let user;
            for(let i = 0; i < usuarios.length; i++){
                if(usuarios[i].email == req.body.email){
                    if(bcrypt.compareSync(req.body.password, usuarios[i].password)){
                        user = usuarios[i];
                        break;
                    }
                }
            }
            if(req.body.remember){
                res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 60 })
            }
            if(!user){
                res.render('./users/login', {errors: {
                    credentials: {
                        msg:'Credenciales inválidas'
                    }
                }, old: req.body});
            } 
            req.session.user = user;
            res.redirect('/')
        } else{
            res.render('./users/login', {errors: errors.mapped(), old: req.body});
        }
    },
    register: (req, res)=>{
        res.render('./users/register')
    },
    singUp: (req, res) => {
        res.redirect('/users/login')
    }
}

module.exports = controller;