module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      stock: {
        type: DataTypes.TINYINT,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      is_new: {
        type: DataTypes.TINYINT,
        allowNull: false
      }
    };
    let config = {
        tableName: 'productos',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config)
    Product.associate = (models) => {
        Product.hasMany(models.Product_Images, {
            foreignKey: "id_product_images",
            as: "product_images", 
        });
        Product.belongsToMany(models.Roles, {
          as: 'product_color',
          through: 'product_color',
          foreignKey: 'id_product',
          otherKey: 'id_color'            
      })
    }
    return Product
}