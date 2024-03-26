const db = require('../../database/models');
const sequelize = db.sequelize;
const {Op} = require('sequelize');

const productsApiController = {
    list: async (req, res) => {
        const productos = await db.Products.findAll({
            attributes:['id', 'name', 'description', 'category'],
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
        const prod = [...productos]
        let respuesta = {
            count: productos.length,
            countByCategory: {
                Femenino: contFem,
                Masculino: contMasc,
                Unisex: contUni
            },
            products:  [...prod ]
        
        }
        res.json(respuesta)
    },

    detail: async (req, res) => {
        const product = await db.Products.findByPk(req.params.id)
        const stock = await db.Stock.findAll({
            where:{ id_product: req.params.id },
            include: [
                {model: db.Colors,as: 'colors_stock', attributes: ['name']}, 
                {model: db.Sizes, as: 'sizes_stock', attributes: ['name']}
            ]})
        
        const http = 'http://';
        const https = 'https://';
        if(!product.dataValues.image.includes(http) && !product.dataValues.image.includes(https)) {
            product.dataValues.image = `http://localhost:8000/img/products/${product.dataValues.image}`;
        }
        let Pstock = [...stock]
        let Stock = []
         Pstock.map(stock =>{  Stock.push({quantity: stock.dataValues.quantity, color:stock.dataValues.colors_stock.dataValues.name, size:stock.dataValues.sizes_stock.dataValues.name })})
        
        const respuesta = {
            product,
            Stock
        }
        
        res.json(respuesta)
    }

}

module.exports = productsApiController;