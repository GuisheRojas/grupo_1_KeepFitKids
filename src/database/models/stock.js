module.exports = (sequelize, dataTypes) => {
    let alias = 'Stock';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'sizes',
        timestamps: false
    };
    const Stock = sequelize.define(alias, cols, config)
    Stock.associate = (models) => {
        Stock.hasMany(models.Products, {
            foreignKey: "id_product",
            as: "products", 
        })

        Stock.hasMany(models.Colors, {
            foreignKey: 'id_color',
            as: 'colors'
        })

        Stock.hasMany(models.Sizes, {
            foreignKey: 'id_size',
            as: 'sizes'
        })
    }
   
    return Stock
}