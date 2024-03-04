const db = require('../database/models');
const sequelize = db.sequelize;
const {Op} = require('sequelize');

const controller = {
    home: async (req, res) => {
        const productos = await db.Products.findAll({where: {is_new: 1}})
        const products_images = await db.Product_Image.findAll()
        return res.render('home', {productos, products_images, user: req.session.user, css:'/css/home.css'})
    },
}

module.exports = controller;