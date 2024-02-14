'use strict';
const {DataTypes} = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('product_colors', { 
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
      id_color: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'colors',
            schema: 'schema'
          }, 
          key: 'id'
        },
        allowNull: false
      },
     });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('product_colors');
    
  }
};
