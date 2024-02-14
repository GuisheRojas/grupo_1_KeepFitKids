'use strict';
const {DataTypes} = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('product_sizes', { 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    id_size: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'sizes',
          schema: 'schema'
        }, 
        key: 'id'
      },
      allowNull: false
    }
  });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('product_sizes');
  }
};
