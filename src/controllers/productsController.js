const controller = {
    productCart: (req, res)=> {
        return res.render('./products/productCart')
    },
    detailProduct: (req, res)=>{
        return res.render('./products/detailproduct')
    }
}

module.exports = controller;