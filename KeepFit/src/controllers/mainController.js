const db = require('../database/models');
const sequelize = db.sequelize;
const {Op} = require('sequelize');

const controller = {
    home: async (req, res) => {
        const productos = await db.Products.findAll({where: {is_new: 1}})
        return res.render('home', {productos, user: req.session.user, css:'/css/home.css'})
    },
}

module.exports = controller;