'use strict';

const {DataTypes} = require("sequelize")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
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
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      is_new: {
        type: DataTypes.TINYINT,
        allowNull: false
      },
      id_product_image: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'product_image'
          }, 
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
      }
      });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
    
  }
};
