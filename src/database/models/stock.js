module.exports = (sequelize, dataTypes) => {
    let alias = 'Stock';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'stock',
        timestamps: false
    };
    const Stock = sequelize.define(alias, cols, config)
    Stock.associate = (models) => {
        Stock.belongsTo(models.Products, {
            foreignKey: "id_product",
            as: "Products", 
        })

        Stock.belongsTo(models.Colors, {
            foreignKey: 'id_color',
            as: 'Colors'
        })

        Stock.belongsTo(models.Sizes, {
            foreignKey: 'id_size',
            as: 'Sizes'
        })
    }
   
    return Stock
}