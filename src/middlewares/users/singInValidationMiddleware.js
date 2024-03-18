
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../../database/models');

const singInValidation = [
    body('email').notEmpty().withMessage('El email es obligatorio').isEmail().withMessage('El email no tiene un formato válido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria')
];

const processLogin = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.render('./users/login', {
            errors: errors.mapped(),
            old: req.body,
            css: '/css/forms.css'
        });
    }

    try {
        const user = await db.Users.findOne({ where: { email: req.body.email } });

        if (!user) {
            return res.render('./users/login', {
                errors: {
                    email: {
                        msg: 'Usuario no encontrado'
                    }
                },
                old: req.body,
                css: '/css/forms.css'
            });
        }

        const passwordMatch =  await bcrypt.compare(req.body.password, user.password);

        if (!passwordMatch) {
            return res.render('./users/login', {
                errors: {
                    password: {
                        msg: 'Contraseña incorrecta'
                    }
                },
                old: req.body,
                css: '/css/forms.css'
            });
        }

        req.session.user = user; 
        return res.redirect('/'); 
    } catch (error) {
        console.error('Error al procesar el login:', error);
        return res.status(500).send('Error interno del servidor');
    }
};

module.exports = {
    singInValidation,
    processLogin
};
