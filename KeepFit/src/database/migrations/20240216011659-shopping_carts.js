'use strict';
const {DataTypes} = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('shopping_carts', { 
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_user: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users'
          }, 
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
      }
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('shopping_carts');
  
  }
};
