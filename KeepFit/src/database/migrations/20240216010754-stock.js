'use strict';
const {DataTypes} = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('stock', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false
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
        id_color: {
          type: DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'colors'
            }, 
            key: 'id'
          },
          allowNull: false,
          onDelete: 'CASCADE'
        },
        id_size:{
          type: DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'sizes'
            }, 
            key: 'id'
          },
          allowNull: false,
          onDelete: 'CASCADE'
        }
       }
      
      );
     
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('stock');
     
  }
};
