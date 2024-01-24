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
        if(errors.isEmpty()){
            let user;
            for(let i = 0; i < usuarios.length; i++){
                if(usuarios[i].email == req.body.email){
                    if(bcrypt.compareSync(req.body.password, usuarios[i].password)){
                        user = usuarios[i];
                        break;
                    }
                }
            }
            
            if(!user){
                return res.render('./users/login', {errors: {
                    credentials: {
                        msg:'Credenciales inválidas'
                    }
                }, old: req.body});
            } 
            req.session.user = user;

            if(req.body.remember){
                res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 60 })
            }
            
            res.redirect('/')
        } else{
            res.render('./users/login', {errors: errors.mapped(), old: req.body});
        }
    },

    register: (req, res)=>{
        res.render('./users/register')
    },

    processRegisterUser: (req, res) => {
        const errors = validationResult(req);
        if(errors.isEmpty()) {
            res.redirect('/users/login');
        }
        else {
            let avatarPath = path.join(__dirname, `../../public/img/users/${req.file.filename}`);
            fs.unlinkSync(avatarPath);
            return res.render('./users/register', {
                errors: errors.mapped(),
                old: req.body
            });
        }

        let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('./users/register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				old: req.body
			});
		}

		let userToCreate = {
			...req.body,
			password: bcrypt.hashSync(req.body.password, 6),
			avatar: req.file.filename
		}

		User.create(userToCreate);

		return res.redirect('./login');
	},

    profile: (req, res) => {
        res.render('./users/profile', {user: req.session.user})
    },

    editProfile: (req, res) => {
        res.render('./users/editProfile', {user: req.session.user})
    },

    editedProfile: (req, res) => {

    },

    logOut: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = controller;