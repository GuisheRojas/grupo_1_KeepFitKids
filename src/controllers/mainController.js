const productsController = require("./productsController");

const controller = {
    home: (req, res) => {
        return res.render('home', {productos: productsController.productos, user: req.session.user, css:'/css/home.css'})
    },
}

module.exports = controller;