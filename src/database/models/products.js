module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: dataTypes.STRING,
        allowNull: false
      },
      description: {
        type: dataTypes.STRING,
        allowNull: false
      },
      price: {
        type: dataTypes.DECIMAL,
        allowNull: false
      },
      category: {
        type: dataTypes.STRING,
        allowNull: false
      },
      is_new: {
        type: dataTypes.TINYINT,
        allowNull: false
      },
      image: {
        type: dataTypes.STRING,
        allowNull: false
      }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config)
    
    Product.associate = (models) => {
        Product.belongsToMany(models.Users, {
          as: 'user_product',
          through: 'user_products',
          foreignKey: 'id_product',
          otherKey: 'id_user'
        })
        Product.belongsToMany(models.Shopping_carts, {
          as: 'cart_items',
          through: 'Cart_items',
          foreignKey: 'id_product',
          otherKey: 'id_shopping_cart'
        })
        Product.hasMany(models.Stock, {
          foreignKey: "id_product",
          as: "Products", 
      });
    }
    
  return Product
}