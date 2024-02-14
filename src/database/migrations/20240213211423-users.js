'use strict';
const {DataTypes} = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('users', { 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_roles:{
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'roles',
          schema: 'schema'
        }, 
        key: 'id'
      },
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false
    }
  
  });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
    
  }
};
