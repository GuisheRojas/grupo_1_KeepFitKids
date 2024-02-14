module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_Images';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name:{
            type: DataTypes.STRING,
          }
    };

    let config = {
        tableName: 'productos',
        created_at: new DATE(),
        updated_at: new DATE()
    };

    const Product_Image = sequelize.define(alias, cols, config)
    Product_Image.associate = (models) => {
        Product_Image.belongsTo(models.Products, {
            foreignKey: "id_product_images",
            as: "products", 
        });
    }
    return Product_Image
}