module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart_items';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity: {
          type: dataTypes.INTEGER,
          allowNull: false
        },
        subtotal: {
          type: dataTypes.DECIMAL,
          allowNull: false
        }
    };
    let config = {
        tableName: 'cart_items',
        timestamps: false
    };
    const Cart_item = sequelize.define(alias, cols, config)
   
    return Cart_item
}