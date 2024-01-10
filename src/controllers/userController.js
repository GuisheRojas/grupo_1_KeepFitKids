const {validationResult} = require('express-validator');

const User = require('../Models/User');

const controller = {
    login: (req, res) => {
        res.render('./users/login')
    },
    singIn: (req, res) => {
        res.redirect('/')
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