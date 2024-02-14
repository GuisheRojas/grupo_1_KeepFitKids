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
            tableName: 'shopping_carts',
            schema: 'schema'
          }, 
          key: 'id'
        },
        allowNull: false
      },
      id_product: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'products',
            schema: 'schema'
          }, 
          key: 'id'
        },
        allowNull: false
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
