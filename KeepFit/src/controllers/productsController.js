const { validationResult } = require('express-validator');

const fs = require('fs');
const path = require('path');

const db = require('../database/models');
const sequelize = db.sequelize;
const {Op} = require('sequelize');

let carrito = [];


const productsController = {

    //muestra los resultados de una búsqueda
    resultsSearch: async (req, res) => {
        let search = req.query.search.toUpperCase();
        const resultsSearch = await db.Products.findAll({ where:{ name: { [Op.like]: '%' + search + '%' } } });
        res.render('./products/resultsSearch', {resultsSearch, search, css: '/css/resultsSearch.css'})
    },

    //muestra el carrito de compras del cliente
    productCart: (req, res) => { 
        if(req.session.user) {
            res.render('./products/productCart', {carrito, user: req.session.user, css:'/css/productCart.css'})
        } else {
            res.redirect('/users/login');
        }
    },

    //muestra el detalle de un producto
    detailproduct: async (req, res) => {
        const product = await db.Products.findByPk(req.params.id);
        const stock = await db.Stock.findAll({where: {id_product: req.params.id}})
        const colors = await db.Colors.findAll()
        const sizes = await db.Sizes.findAll();
        
        res.render('./products/detailproduct', {product, stock, colors, sizes, css: '/css/detailProduct.css'});
    },
    

    //muestra una página solo con ropa de nenes 
    nenes: async (req, res) => {
        const productos = await db.Products.findAll()
        res.render('./products/kids', {productos, css: '/css/kids.css', category: 'Masculino'});
    },


    //muestra una página solo con ropa de nenas 
    nenas: async (req, res) => {
        const productos = await db.Products.findAll()
        res.render('./products/kids', {productos, css: '/css/kids.css', category: 'Femenino'});
    },

    //muestra la página de carga de un producto
    getProduct: async (req, res) => {
        const colors = await db.Colors.findAll()
        const sizes = await db.Sizes.findAll();
        res.render('products/getProductBasico', {colors, sizes, css: '/css/forms.css'})
    },

    //agrega un producto
    addProduct: async (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            if(req.file){
                const newProduct = await db.Products.create({
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    category: req.body.category,
                    is_new: true,
                    image: req.file.filename
                });

                for (let i = 0; i < req.body.size.length; i++) {
                    await db.Stock.create({
                        quantity: req.body.quantity,
                        id_product: newProduct.id,
                        id_color: req.body.color,
                        id_size: req.body.size[i]
                    })
                }

                const colors = await db.Colors.findAll()
                const sizes = await db.Sizes.findAll();
                res.redirect('/products/list');
            } else {
                const colors = await db.Colors.findAll()
                const sizes = await db.Sizes.findAll();
                res.render("./products/getProductBasico", {errors: errors.mapped(), old: req.body, colors, sizes, css: '/css/forms.css'});
            }
        } else{
            if(req.file){
                let productPath = path.join(__dirname, `../../public/img/products/${req.file.filename}`);
                fs.unlinkSync(productPath);
            }
            const colors = await db.Colors.findAll()
            const sizes = await db.Sizes.findAll();
            res.render("./products/getProductBasico", {errors: errors.mapped(), old: req.body, colors, sizes, css: '/css/forms.css'});
        }
    },

    //muestra la pagina de edición de un producto
    editProduct: async (req, res) => {
        const product = await db.Products.findByPk(req.params.id)
        const stock = await db.Stock.findAll({where: {id_product: req.params.id}})
        const colors = await db.Colors.findAll()
        const sizes = await db.Sizes.findAll();
        res.render("./products/editproduct", {product, colors, sizes, stock, css: '/css/forms.css'})
    },

    //modifica un producto
    modifiedProduct: async (req, res) => {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            if(req.file){ 

                await db.Products.update({
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    stock: req.body.stock,
                    category: req.body.category,
                    is_new: req.body.is_new,
                    image: req.file.filename
                }, {
                    where: { id: req.params.id },
                });

                res.redirect('/products/list');
            } else {
                const product = await db.Products.findByPk(req.params.id)
                const stock = await db.Stock.findAll({where: {id_product: req.params.id}})
                const colors = await db.Colors.findAll()
                const sizes = await db.Sizes.findAll();
                res.render('./editProduct', {errors: errors.mapped(), product, colors, sizes, stock, css: '/css/forms.css'})
            }
        } else{
            if(req.file){
                let productPath = path.join(__dirname, `../../public/img/products/${req.file.filename}`);
                fs.unlinkSync(productPath);
            }
            const product = await db.Products.findByPk(req.params.id)
            const stock = await db.Stock.findAll({where: {id_product: req.params.id}})
            const colors = await db.Colors.findAll()
            const sizes = await db.Sizes.findAll();
            res.render("./products/editproduct", {errors: errors.mapped(), product, colors, sizes, stock, css: '/css/forms.css'});
        }
    },

    //agrega un producto al carrito
    agregarProdCarrito: async (req, res) => {
        if(req.session.user) {
            let is_newBuy = await db.Products.findByPk(req.params.id)
            
            let is_newProduct = { ...is_newBuy.dataValues}
            is_newProduct.color = req.body.colorStock;
            is_newProduct.size = req.body.sizeStock;
            is_newProduct.cantidad = req.body.cantidad;
            is_newProduct.id = carrito.length + 1;
            
            carrito.push(is_newProduct)
    
            res.redirect('/products/productCart');  
        }
        else {
            res.redirect('/users/login');
        }
    },

    //elimina un producto del carrito
    eliminarProdCarrito: (req, res) => {
        for(let i=0; i<carrito.length; i++) {
            if(req.params.id == carrito[i].id){
                carrito.splice(i, 1);
            }
        }
        res.redirect('/products/productCart');
    },

    //muestra el listado de productos
    listadoProductos: async (req, res) => {
        const products = await db.Products.findAll()
        res.render('./products/productsList', {products, css: '/css/productsList.css'})
    },

    //elimina un producto del listado de productos
    eliminarProd: async (req, res) => {
       await db.Products.destroy({
        where: 
        {id:req.params.id}
       })
       res.redirect("/products/list")
    }

}




module.exports = productsController;