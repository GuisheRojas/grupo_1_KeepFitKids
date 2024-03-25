const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')

const fs = require('fs');
const path = require('path')

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const User = db.Users
const User_roles = db.User_roles

const controller = {
    
    register: async (req, res)=>{
        res.render('./users/register', {css: '/css/forms.css'})
    },

    processRegisterUser: async (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            if(req.file){
                let avatarPath = path.join(__dirname, `../../public/img/users/${req.file.filename}`);
                fs.unlinkSync(avatarPath);
            }
            return res.render('./users/register', {
                errors: errors.mapped(),
                old: req.body, 
                css:'/css/forms.css'
            });
        }

        let userInDB = await User.findAll({ where: { email: { [Op.like]: req.body.email } } });
		if (userInDB.length == 1) {
			return res.render('./users/register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				old: req.body, 
                css:'/css/forms.css'
			});
		}
        if(req.file){
            let userToCreate = {
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 6),
                avatar: req.file.filename
            }
            let user = await User.create(userToCreate);
            User_roles.create({
                id_user: user.id,
                id_role: 2
            })
        } else {
            let userToCreate = {
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 6),
                avatar: 'defaultUserImage.png'
            }
            let user = await User.create(userToCreate);
            User_roles.create({
                id_user: user.id,
                id_role: 2
            })
        }

		return res.redirect('./login');
	},

    login: (req, res) => {
        res.render('./users/login', {css:'/css/forms.css', user: req.session.user})
    },

    singIn: async (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let userData = await User.findOne({where: {email: {[Op.like]: req.body.email }}})
            let user = userData.dataValues;
            delete user.password;
            let user_role = await db.User_roles.findOne({where:{ id_user: user.id }})
            user.role = user_role.dataValues.id_role
            req.session.user = user;
            if(req.body.remember){
                res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 60 })
            }
            
            res.redirect('/')
            
        } else{
            res.render('./users/login', {errors: errors.mapped(), old: req.body, css: '/css/forms.css'});
        }
    },

    profile: async (req, res) => {
        const userInDB = await User.findByPk(req.session.user.id)
        res.render('./users/profile', {user: userInDB.dataValues, css: '/css/profile.css'})
    },

    editProfile: async (req, res) => {
        const userInDB = await User.findByPk(req.session.user.id)
        return res.render("./users/editProfile", {usuario: userInDB.dataValues, css:'/css/forms.css'})
    },

    editedProfile: async (req, res) => {
        const errors = validationResult(req);
        if(errors.isEmpty()) {
            //buscamos el usuario con el que estamos trabajando
            let idUser = req.session.user.id;
            const userInDB = await User.findByPk(idUser)

            const existentEmail = await User.findAll({where: {email: {[Op.like]: req.body.email}}});
            
            if ((existentEmail > 0) && (existentEmail[0].dataValues.email != userInDB.dataValues.email)){
                
                return res.render('./users/editProfile', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    old: req.body, 
                    css: '/css/forms.css',
                    usuario: userInDB.dataValues
                });
            } else {
                if(req.file){
                    let userToUpdate = {
                        ...req.body,
                        password: bcrypt.hashSync(req.body.password, 6),
                        avatar: req.file.filename
                    }
                    await User.update(userToUpdate, { where:{ id: idUser } } )
                } else {
                    let avatarPath = path.join(__dirname, `../../public/img/users/${req.session.user.avatar}`);
                    fs.unlinkSync(avatarPath);
                    
                    let userToUpdate = {
                        ...req.body,
                        password: bcrypt.hashSync(req.body.password, 6),
                        avatar: 'defaultUserImage.png'
                    }
                    await User.update(userToUpdate, { where:{ id: idUser } } )
                }
                const newUserInDB = await User.findByPk(idUser)
                req.session.user = newUserInDB;
                return res.redirect('./profile');
            }
        }
        else {
            if(req.file){
                let avatarPath = path.join(__dirname, `../../public/img/users/${req.file.filename}`);
                fs.unlinkSync(avatarPath);
            }
            return res.render('./users/editProfile', {
                errors: errors.mapped(),
                old: req.body,
                css: '/css/forms.css'
            });
        }
	
    },

    logOut: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	},

    admin: async (req, res) => {
        res.render('./users/adminPanel', {css: '/css/adminPanel.css'});
    }

}

module.exports = controller;