const db = require('../../database/models');
const sequelize = db.sequelize;
const {Op} = require('sequelize');

const productsApiController = {
    list: async (req, res) => {
        const productos = await db.Products.findAll({
            attributes:['id', 'name', 'description'],
            include: [{model: db.Stock, as: 'products_stock', attributes: ['quantity'],
                include: [
                    {model: db.Colors,as: 'colors_stock', attributes: ['name']}, 
                    {model: db.Sizes, as: 'sizes_stock', attributes: ['name']}
                ]
            }]
        });
        let contFem = 0;
        let contMasc = 0;
        let contUni = 0;
        for (let i = 0; i < productos.length; i++) {
            const element = productos[i];
            element.dataValues.detail = 'http://localhost:8000' + req.originalUrl + '/' + element.id;
            if(element.category == 'Femenino'){
                contFem ++;
            } else if(element.category == 'Masculino'){
                contMasc ++;
            } else{
                contUni ++;
            }
        }
        let respuesta = {
            count: productos.length,
            countByCategrory: {
                Femenino: contFem,
                Masculino: contMasc,
                Unisex: contUni
            },
            products: { ...productos }
        }
        res.json(respuesta)
    },

    detail: async (req, res) => {
        const product = await db.Products.findByPk(req.params.id, {
            include: [{model: db.Stock, as: 'products_stock', attributes: ['quantity'],
                include: [
                    {model: db.Colors,as: 'colors_stock', attributes: ['name']}, 
                    {model: db.Sizes, as: 'sizes_stock', attributes: ['name']}
                ]
            }]
        })
        res.json(product)
    },

    create: async (req, res) => {},

    update: (req, res) => {},

    destroy: async (req, res) => {}
}

module.exports = productsApiController;