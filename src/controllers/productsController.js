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
        res.render('./products/nenes', {productos: productos})
    },

    nenas: (req, res) => {
        res.render('./products/nenas', {productos: productos})
    },

    getProduct: (req, res) => {
        res.render("./products/addproduct", {productos: productos})
    },

    addProduct: (req,res) => {
        if(req.file){ 
            let newProduct = {};
            newProduct = req.body;
            newProduct.src = req.file.filename;
            newProduct.new = true;
            newProduct.id = productos.length + 1;
            productos.push(newProduct);
            //console.log(productos);
            let newProductJSON = JSON.stringify(productos);
            fs.writeFileSync(newProductJSON);
            res.redirect('./getProduct');
        } else {
            res.render("./products/addproduct", {productos: productos});
        }
    },
    editProduct: (req, res)=>{
        return res.render("./products/editproduct", {productos: productos})
    },
    modifiedProduct: (req, res) => {
        const editedProduct = {
            src: req.file.filename,
            price: req.body.price,
            name: req.body.name,
            description: req.body.description,
            color: req.body.color,
            talle: req.body.talle,
            stock: req.body.stock,
            sexo: req.body.sexo,
            new: false,
            id: productos.length + 1
        }
        productos.push(editedProduct)
        let newProductJSON = JSON.stringify(productos);
        fs.writeFileSync(newProductJSON)
        res.redirect('./editProduct')
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
        for(let i=0; i<carrito.length; i++) {
            if(req.params.id == carrito[i].id){
                carrito.splice(i, 1)            
            }
        }
        res.render('./products/productCart')
    }

}

module.exports = {productos, controller};