'use strict';

const { faker } = require("@faker-js/faker");

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('roles', [{
      id: 1,
      name: 'admin'
    }, {
      id: 2,
      name: 'comprador'
    }, {
      id: 3,
      name: 'vendedor'
    }]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
    
  }
};
