module.exports = (sequelize, dataTypes) => {
    let alias = 'Stock';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_product: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "products",
              key: "id",
            },
        },
        id_color: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "roles",
              key: "id",
            },
        },
        id_size: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "sizes",
              key: "id",
            },

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
            as: "products_stock", 
        })

        Stock.belongsTo(models.Colors, {
            foreignKey: 'id_color',
            as: 'colors_stock'
        })

        Stock.belongsTo(models.Sizes, {
            foreignKey: 'id_size',
            as: 'sizes_stock'
        })
    }
   
    return Stock
}