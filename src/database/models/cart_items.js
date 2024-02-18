module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart_items';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity: {
          type: DataTypes.INTEGER,
        },
        subtotal: {
          type: DataTypes.DECIMAL
        }
    };
    let config = {
        tableName: 'stock',
        timestamps: false
    };
    const Cart_item = sequelize.define(alias, cols, config)
   
    return Cart_item
}