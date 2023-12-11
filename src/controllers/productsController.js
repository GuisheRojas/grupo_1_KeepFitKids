const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productos.json');
let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const { validationResult } = require('express-validator');

let carrito = [
{
}
];

const controller = {

    productCart: (req, res) => {
        const productId = productos.find(productos => productos.id == req.params.id);
        res.render('./products/productCart', {productId})
    },

    detailproduct: (req, res) => {
        const productId = productos.find(productos => productos.id == req.params.id);
        res.render('./products/detailproduct', {productId})
    },

    nenes: (req, res) => {
        res.render('./products/nenes', {productos: productos})
    },

    nenas: (req, res) => {
        res.render('./products/nenas', {productos: productos})
    },

    getProduct: (req, res) => {
        res.render("./products/getproduct", {productos: productos})
    },

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
                res.render("./products/getproduct", {errors: errors.mapped()});
            }
        } else{
            res.render("./products/getproduct", {errors: errors.mapped(), old: req.body});
        }
    },

    editProduct: (req, res)=>{
        const product = productos.find(product => product.id == req.params.id);                
        return res.render("./products/editproduct", {product})
    },

    modifiedProduct: (req, res) => {
        let errors = validationResult(req);
        if(errors.errors.length == 0){
            if(req.file){ 
                let modifiedProduct = {};
                modifiedProduct = req.body;
                modifiedProduct.src = req.file.filename;
                modifiedProduct.new = false;
                productos.push(modifiedProduct);
                
                let modifiedProductJSON = JSON.stringify(productos);
                fs.writeFileSync(path.join(__dirname, '../database/productos.json'), modifiedProductJSON);
                res.redirect('./editProduct');
            } else {
                res.redirect('./editProduct')
            }
        } else{
            let product = {}
            product = req.body;
            product.id = req.params.id;
            res.render("./products/editproduct", {errors: errors.mapped(), product});
        }
    },

    agregarCarrito: (req, res) => {
        const newBuy = {
            src: req.body.src,
            price: req.body.price,
            name: req.body.name,
            color: req.body.color,
            talle: req.body.talle,
            stock: req.body.stock,
            id: req.body.id
        }
        carrito.push({newBuy: newBuy})
       
    },

    eliminarCarrito: (req, res) => {
        
        for(i=0; i<carrito.length; i++) {
            if(req.params.id == carrito[i].id){
                carrito.splice(i, 1)
            
            }
        }
        res.redirect("/");

    }

}

module.exports = {productos, controller};