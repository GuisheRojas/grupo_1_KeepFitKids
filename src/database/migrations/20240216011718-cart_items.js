'use strict';
const {DataTypes} = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cart_items', { 
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_shopping_cart: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'shopping_carts'
          }, 
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
      },
      id_product: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'products'
          }, 
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      subtotal: {
        type: DataTypes.DECIMAL
      }
     });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('cart_items');
     
  }
};
