const productsController = require("./productsController");

const controller = {
    home: (req, res) => {
        return res.render('home', {productos: productsController.productos})
    },
}

module.exports = controller;