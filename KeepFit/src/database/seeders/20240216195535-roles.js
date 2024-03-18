'use strict';

const { faker } = require("@faker-js/faker");

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('roles', [
      {name: 'admin'}, 
      {name: 'comprador'},
      {name: 'vendedor'}
    ]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
    
  }
};
