const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../database/usuarios.json');
let usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')

const User = require('../Models/User');

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

    // video - silvina
    processRegisterUser: (req, res)=>{
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            return res.render('register', {
                errors:resultValidation.mapped(),
                oldData: req.body
            });
        }
        let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 6),
			avatar: req.file.filename
		}

		let userCreated = User.create(userToCreate);

		return res.redirect('/users/login');
	},
    

    singUp: (req, res) => {
        res.redirect('/users/login')
    }
}

module.exports = controller;