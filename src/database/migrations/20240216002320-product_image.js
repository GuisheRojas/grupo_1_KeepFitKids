'use strict';

const {DataTypes} = require("sequelize")

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('product_image', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name:{
        type: DataTypes.STRING,
      }
      });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('product_image');
  }
};
