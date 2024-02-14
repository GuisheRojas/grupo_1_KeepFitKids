'use strict';
const {DataTypes} = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
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
      },
      id_product_image: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'product_image',
            schema: 'schema'
          }, 
          key: 'id'
        },
        allowNull: false
      }
      });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
    
  }
};
