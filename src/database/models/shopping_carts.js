module.exports = (sequelize, dataTypes) => {
    let alias = 'Shopping_carts';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    };
    let config = {
        tableName: 'Shopping_carts',
        timestamps: false
    };
    const Shopping_cart = sequelize.define(alias, cols, config)
    Shopping_cart.associate = (models) => {
        Shopping_cart.belongsTo(models.Users, {
            foreignKey: "id_user",
            as: "users", 
        });
        Shopping_cart.belongsToMany(models.Products, {
            as: 'cart_items',
            through: 'Cart_items',
            foreignKey: 'id_shopping_cart',
            otherKey: 'id_product'
          })
    }
    return Shopping_cart
}