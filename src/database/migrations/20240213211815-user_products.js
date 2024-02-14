'use strict';
const {DataTypes} = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_products', { 
      id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'users',
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
  });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_products');
    
  }
};
