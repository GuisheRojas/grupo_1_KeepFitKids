
const { body} = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../../database/models');
const { Op } = require("sequelize");

const singInValidations = [
    body("email")
      .notEmpty()
      .withMessage("Debes completar tu email").bail()
      .isEmail()
      .withMessage("Debes escribir un formato de correo válido").bail()
      .custom(async (value, { req }) => {
        const userToLogin = await db.Users.findOne({
          where: {
            email: req.body.email,
          },
        });
        if (!userToLogin) {
          throw new Error("El usuario no está registrado");
        }
        return true
      }),
    body("password")
      .notEmpty()
      .withMessage("Debes introducir tu contraseña").bail()
      .custom(async (value, { req }) => {
        const userToLogin = await db.Users.findOne({
          where: {
            email: req.body.email,
          },
        });
        if (userToLogin) {
          const password = userToLogin.password;
          let passwordOk = bcrypt.compareSync(req.body.password, password);
          if (!passwordOk) {
            throw new Error("La contraseña es incorrecta");
          }return true;
        }
        
      }),
  ]

module.exports = singInValidations;
