'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('colors', [
      {name: 'verde claro'}, 
      {name: 'verde oscuro'}, 
      {name: 'rojo'}, 
      {name: 'amarillo'}, 
      {name: 'azul'}, 
      {name: 'rosa'}, 
      {name: 'celeste'}, 
      {name: 'blanco'}, 
      {name: 'negro'}, 
      {name: 'gris claro'}, 
      {name: 'naranja'}, 
      {name: 'marrón'}, 
      {name: 'beige'}, 
      {name: 'lila'}, 
      {name: 'violeta'},
      {name: 'fucsia'},
      {name: 'gris oscuro'}, 
      {name: 'bordo'}, 
      {name: 'nude'}, 
      {name: 'estampado'}
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('colors', null, {});
  }
};
