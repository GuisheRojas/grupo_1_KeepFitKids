module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_Image';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name:{
            type: dataTypes.STRING,
          }
    };

    let config = {
        tableName: 'product_image',
        created_at: new DATE(),
        updated_at: new DATE()
    };

    const Product_Image = sequelize.define(alias, cols, config)
    Product_Image.associate = (models) => {
        Product_Image.belongsTo(models.Products, {
            foreignKey: "id_product_image",
            as: "products", 
        });
    }
    return Product_Image
}