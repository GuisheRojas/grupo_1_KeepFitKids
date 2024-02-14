module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_color';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          }
    };
    let config = {
        tableName: 'product_color',
        timestamps: true
    };
    const Product_color = sequelize.define(alias, cols, config)
    Product_color.associate = (models)=>{
        Product_color.hasMany(models.Products, {
            as: 'product_color',
            foreignKey: 'id_product',       
        })
        Product_color.hasMany(models.Colors, {
            as: 'product_color',
            foreignKey: 'id_color',          
        })
    }
    return Product_color
}