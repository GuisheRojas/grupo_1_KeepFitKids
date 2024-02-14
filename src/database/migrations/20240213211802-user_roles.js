'use strict';
const {DataTypes} = require("sequelize")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_roles', { 
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
      id_role: {
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
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_roles');
    
  }
};
