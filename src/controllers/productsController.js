const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productos.json');
let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const { validationResult } = require('express-validator');

const {colors, sizes} = require('../colorsAndSizesProducts');

let carrito = [];

const controller = {

    //muestra los resultados de una búsqueda
    search: (req, res) => {
        let search = req.query.search.toUpperCase();
        let resultsSearch = productos.filter((product) => product.nameProd.toUpperCase().includes(search))
        console.log(resultsSearch)
        res.render('./products/resultsSearch', {resultsSearch, search})
    },

    //muestra el carrito de compras del cliente
    productCart: (req, res) => {
        res.render('./products/productCart', {carrito})
    },

    //muestra el detalle de un producto
    detailproduct: (req, res) => {
        const product = productos.find(product => product.id == req.params.id);
        res.render('./products/detailproduct', {product})
    },

    //muestra una página solo con ropa de nenes 
    nenes: (req, res) => {
        res.render('./products/nenes', {productos: productos})
    },

    //muestra una página solo con ropa de nenas 
    nenas: (req, res) => {
        res.render('./products/nenas', {productos: productos})
    },

    //muestra la página de carga de un producto
    getProduct: (req, res) => {
        res.render("./products/getproduct", {productos: productos, colors, sizes})
    },

    //agrega un producto
    addProduct: (req,res) => {
        let errors = validationResult(req);
        if(errors.errors.length == 0){
            if(req.file){ 
                let newProduct = {};
                newProduct = req.body;
                newProduct.src = req.file.filename;
                newProduct.new = true;
                newProduct.id = productos.length + 1;
                productos.push(newProduct);
                
                let newProductJSON = JSON.stringify(productos);
                fs.writeFileSync(path.join(__dirname, '../database/productos.json'), newProductJSON);
                res.redirect('./getProduct');
            } else {
                res.render("./products/getproduct", {errors: errors.mapped(), old: req.body, colors, sizes});
            }
        } else{
            console.log(req.body)
            res.render("./products/getproduct", {errors: errors.mapped(), old: req.body, colors, sizes});
        }
    },

    //muestra la pagina de edición de un producto
    editProduct: (req, res)=>{
        const product = productos.find(product => product.id == req.params.id);                
        return res.render("./products/editproduct", {product, colors, sizes})
    },

    //modifica un producto
    modifiedProduct: (req, res) => {
        let errors = validationResult(req);
        if(errors.errors.length == 0){
            if(req.file){ 
                for(let i = 0; i < productos.length; i++){
                    if(productos[i].id == req.params.id){
                        productos[i].src = req.file.filename;
                        productos[i].price = req.body.price;
                        productos[i].nameProd = req.body.nameProd;
                        productos[i].description = req.body.description;
                        productos[i].color = req.body.color;
                        productos[i].talle = req.body.talle;
                        productos[i].stock = req.body.stock;
                        productos[i].genero = req.body.genero;
                        productos[i].new = false;                       
                    }
                }
                let modifiedProductJSON = JSON.stringify(productos);
                fs.writeFileSync(path.join(__dirname, '../database/productos.json'), modifiedProductJSON);
                res.redirect('/products/list');
            } else {
                res.render('./editProduct')
            }
        } else{
            let product = {}
            product = req.body;
            product.id = req.params.id;
            res.render("./products/editproduct", {errors: errors.mapped(), product, colors, sizes});
        }
    },

    //agrega un producto al carrito
    agregarProdCarrito: (req, res) => {
        const newBuy = productos.find(product => product.id == req.params.id);
        newBuy.color = req.body.colorStock;
        newBuy.talle = req.body.talleStock;
        newBuy.stock = req.body.cantidad;            

        carrito.push({newBuy})
        for(let i = 0; i < carrito.length; i++){
            console.log(carrito[i])
        }
        res.redirect('/products/productCart')  
    },

    //elimina un producto del carrito
    eliminarProdCarrito: (req, res) => {
        for(i=0; i<carrito.length; i++) {
            if(req.params.id == carrito[i].id){
                carrito.splice(i, 1)

            }
        }
        res.redirect('/products/productCart');
    },

    //muestra el listado de productos
    listadoProductos: (req, res) => {
        res.render('./products/listadoProductos', {productos: productos})
    },

    //elimina un producto del listado de productos
    eliminarProd: (req, res) => {
        for(i=0; i<productos.length; i++) {
            if(req.params.id == productos[i].id){
                productos.splice(i, 1);
                let modifiedProductJSON = JSON.stringify(productos);
                fs.writeFileSync(path.join(__dirname, '../database/productos.json'), modifiedProductJSON);
                res.redirect("/products/list")
            }
        }
    }

}

module.exports = {productos, controller};