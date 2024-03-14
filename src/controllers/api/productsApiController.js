const db = require('../../database/models');
const sequelize = db.sequelize;
const {Op} = require('sequelize');

const productsApiController = {
    list: async (req, res) => {
        const products = await db.Products.findAll()
        let respuesta = {
            meta: {
                status: 200,
                total: products.length,
                url: req.params.originalUrl
            },
            data: { ...products }
        }
        res.json(respuesta)
    },

    detail: async (req, res) => {
        const product = await db.Products.findByPk(req.params.id)
        let respuesta = {
            meta: {
                status: 200,
                total: product.length,
                url: req.params.originalUrl
            },
            data: { ...product }
        }
        res.json(respuesta)
    },

    create: (req, res) => {
        
    },

    update: (req, res) => {},

    destroy: (req, res) => {},
}

module.exports = productsApiController;