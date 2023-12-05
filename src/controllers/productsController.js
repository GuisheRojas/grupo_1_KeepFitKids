const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productos.json');
let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
        return res.render('./products/nenes', {productos: productos})
    },
    nenas: (req, res) => {
        return res.render('./products/nenas', {productos: productos})
    },
    getProduct: (req, res) => {
        return res.render("./products/addproduct", {productos: productos})
    },
    addProduct: (req,res) => {
        const newProduct = {
            src: req.body.src,
            price: req.body.price,
            name: req.body.name,
            description: req.body.description,
            color: req.body.color,
            talle: req.body.talle,
            stock: req.body.stock,
            sexo: req.body.sexo,
            new: true,
            id: productos.length + 1
        }

        let newProductJSON = JSON.stringify(newProduct);

        productos.push(newProduct)
        res.redirect('./getProduct')
    },
    editProduct: (req, res)=>{
        return res.render("./products/editproduct", {productos: productos})
    },
    modifiedProduct: (req, res) => {
        const newProduct = {
            src: req.body.src,
            price: req.body.price,
            name: req.body.name,
            description: req.body.description,
            color: req.body.color,
            talle: req.body.talle,
            stock: req.body.stock,
            sexo: req.body.sexo,
            new: true,
            id: productos.length + 1
        }
        productos.push(newProduct)
        res.redirect('./editProduct')
    },
}

module.exports = {productos, controller};