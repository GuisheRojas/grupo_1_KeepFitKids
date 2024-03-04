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
      },
      id_product: {
        type: dataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "id",
        },
      },
    };

    let config = {
        tableName: 'product_image',
        timestamps: false
    };


    const Product_Image = sequelize.define(alias, cols, config)
    Product_Image.associate = (models) => {
        Product_Image.belongsTo(models.Products, {
            foreignKey: "id_product",
            as: "products", 
        });
    }
    return Product_Image
}