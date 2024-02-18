module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_sizes';
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
        tableName: 'product_sizes',
        timestamps: false
    };
    const product_sizes = sequelize.define(alias, cols, config)
   
    return product_sizes
}