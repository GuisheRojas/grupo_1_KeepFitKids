const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productos.json');
let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const { validationResult } = require('express-validator');

const { colors, sizes } = require('../colorsAndSizesProducts');

let carrito = [];

const productsController = {

    //muestra los resultados de una búsqueda
    search: (req, res) => {
        let search = req.query.search.toUpperCase();
        let resultsSearch = productos.filter((product) => product.name.toUpperCase().includes(search))
        console.log(resultsSearch)
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

    //muestra el desize de un producto
    detailproduct: (req, res) => {
        const product = productos.find(product => product.id == req.params.id);
        res.render('./products/detailproduct', {product, css: '/css/styles.css'});
    },

    //muestra una página solo con ropa de nenes 
    nenes: (req, res) => {
        res.render('./products/nenes', {productos: productos, css: '/css/nenes.css'})
    },

    //muestra una página solo con ropa de nenas 
    nenas: (req, res) => {
        res.render('./products/nenas', {productos: productos, css: '/css/nenes.css'})
    },

    //muestra la página de carga de un producto
    getProduct: (req, res) => {
        res.render("./products/getproduct", {productos: productos, colors, sizes, css: '/css/forms.css'})
    },

    //agrega un producto
    addProduct: (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
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
                res.render("./products/getproduct", {errors: errors.mapped(), old: req.body, colors, sizes, css: '/css/forms.css'});
            }
        } else{
            console.log(req.body)
            res.render("./products/getproduct", {errors: errors.mapped(), old: req.body, colors, sizes, css: '/css/forms.css'});
        }
    },

    //muestra la pagina de edición de un producto
    editProduct: (req, res)=>{
        const product = productos.find(product => product.id == req.params.id);                
        return res.render("./products/editproduct", {product, colors, sizes, css: '/css/forms.css'})
    },

    //modifica un producto
    modifiedProduct: (req, res) => {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            if(req.file){ 
                for(let i = 0; i < productos.length; i++){
                    if(productos[i].id == req.params.id){
                        productos[i].src = req.file.filename;
                        productos[i].price = req.body.price;
                        productos[i].name = req.body.name;
                        productos[i].description = req.body.description;
                        productos[i].color = req.body.color;
                        productos[i].size = req.body.size;
                        productos[i].stock = req.body.stock;
                        productos[i].genre = req.body.genre;
                        productos[i].new = false;                       
                    }
                }
                let modifiedProductJSON = JSON.stringify(productos);
                fs.writeFileSync(path.join(__dirname, '../database/productos.json'), modifiedProductJSON);
                res.redirect('/products/list');
            } else {
                res.render('./editProduct', {errors: errors.mapped(), product, colors, sizes, css: '/css/forms.css'})
            }
        } else{
            let product = {}
            product = req.body;
            product.id = req.params.id;
            res.render("./products/editproduct", {errors: errors.mapped(), product, colors, sizes, css: '/css/forms.css'});
        }
    },

    //agrega un producto al carrito
    agregarProdCarrito: (req, res) => {
        if(req.session.user) {
            let newBuy = productos.find(product => product.id == req.params.id);
    
            let newProduct = { ...newBuy}
            newProduct.color = req.body.colorStock;
            newProduct.size = req.body.sizeStock;
            newProduct.cantidad = req.body.cantidad;            
            newProduct.id = carrito.length + 1;
    
            carrito.push(newProduct)
    
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
    listadoProductos: (req, res) => {
        res.render('./products/productsList', {productos, css: '/css/productsList.css'})
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

module.exports = {productos, productsController};